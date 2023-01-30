// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./interface/IBridgeNFT.sol";

contract BridgeNFT is OwnableUpgradeable{
    // tx fee of different chains
    mapping(uint256 => uint256) public destTxFee;
    // first key is NFT address on this chain, 2nd key is dest chain id, value is address on dest chain
    mapping (address => mapping(uint256 => address)) public destNFTAddr;
    /// only set to true if NFT addr on this chain is the orig, so we will use transferFrom instead of burn/mint
    mapping (address => bool) origNFT;
    mapping (address => bool) public admin;
    address payee;
    uint256 public bridgeMintGas;
    uint256 public ownerOfGas;
    uint256 public transferFromGas;
    

    event SetPayee(address to);
    event Sent(address sender, address srcNft, uint256 tokenId, uint256 dstChId, address reciver, address dstNft);
    event Callback(address sender, address srcNft, uint256 tokenId);
    event Received(address receiver, address nft, uint256 id, uint256 srcChId);
    event SetBridgeGas(uint256 bridgeMintGaslimit, uint256 ownerOfGaslimit, uint256 transferFromGaslimit);

    modifier onlyAdmin() {
        require(
            admin[msg.sender] || owner() == msg.sender,
            "Admin: caller is not the admin"
        );
        _;
    }

    function setAdmin(address _user, bool _auth) external onlyOwner {
        admin[_user] = _auth;
    }

    function initialize()
        public
        initializer
    {
        __Ownable_init();
    }

    function setPayee(address to) external onlyOwner {
        payee = to;
        emit SetPayee(to);
    }

    function getPayee() public view onlyAdmin returns (address) {
        return payee;
    }
    
    function setBridgeGas(uint256 _bridgeMintGas, uint256 _ownerOfGas, uint256 _transferFromGas) external onlyAdmin{
        bridgeMintGas = _bridgeMintGas;
        ownerOfGas = _ownerOfGas;
        transferFromGas = _transferFromGas;
        emit SetBridgeGas(_bridgeMintGas, _ownerOfGas, _transferFromGas);
    }

    function setDestNftAddr(address _srcNft, uint256[] memory _dstChIds, address[] memory _dstNfts) external onlyAdmin{
        require(_dstChIds.length == _dstNfts.length, "length mismatch");
        for(uint256 i = 0; i < _dstChIds.length; i++){
            destNFTAddr[_srcNft][_dstChIds[i]] = _dstNfts[i];
        }
    }

    function delDestNftAddr(address _srcNft, uint256 _dstChId) external onlyAdmin{
        delete destNFTAddr[_srcNft][_dstChId];
    }

    function setTxFee(uint256[] memory _chids, uint256[] memory _fees) external onlyAdmin {
        require(_chids.length == _fees.length, "length mismatch");
        for(uint256 i = 0; i < _chids.length; i++){
            destTxFee[_chids[i]] = _fees[i];
        }
    }

    function setOrigNFT(address _nft, bool _transfer) external onlyAdmin {
        origNFT[_nft] = _transfer;
    }

    function bridge(address _srcNft, uint256 _tokenId, uint256 _dstChId, address _receiver) external payable{
        require(IBridgeNFT(_srcNft).checkBridge(_tokenId), "tokenid not bridge");
        require(msg.sender == IBridgeNFT(_srcNft).ownerOf(_tokenId), "not token owner");
        address dstNft_ = checkAddr(_srcNft, _dstChId);
        require(msg.value >= destTxFee[_dstChId],"insufficient fee");
        if(origNFT[_srcNft]){
            IBridgeNFT(_srcNft).transferFrom(msg.sender,  address(this), _tokenId);
            require(IBridgeNFT(_srcNft).ownerOf(_tokenId) == address(this), "transfer NFT failed");
        } else {
            IBridgeNFT(_srcNft).bridgeBurn(_tokenId);
        }
        if(payee != address(0) && destTxFee[_dstChId] > 0) {
            require(payable(payee).send(destTxFee[_dstChId]), "tx fee collection failed");
        }
        uint256 leftFee = msg.value - destTxFee[_dstChId];
        if(leftFee > 0){
            require(payable(msg.sender).send(leftFee), "refund of left fee failed");
        }
        emit Sent(msg.sender, _srcNft, _tokenId, _dstChId, _receiver, dstNft_);
    }

    function bridgeCallBack(address _sender, address _srcNft, uint256 _tokenId) external onlyAdmin {
        if(origNFT[_srcNft]){
            require(IBridgeNFT(_srcNft).ownerOf{gas: ownerOfGas}(_tokenId) == address(this), "tokenid owner is not bridge");
            IBridgeNFT(_srcNft).transferFrom{gas: transferFromGas}(address(this), _sender, _tokenId);
            require(IBridgeNFT(_srcNft).ownerOf{gas: ownerOfGas}(_tokenId) == _sender, "callback NFT failed");
        } else {
            IBridgeNFT(_srcNft).bridgeMint{gas: bridgeMintGas}(_sender, _tokenId);
        }
        emit Callback(_sender, _srcNft, _tokenId);
    }

    function sendTo(uint256 _srcChid, address _dstNft, uint256 _tokenId, address _receiver) external onlyAdmin{
        if (origNFT[_dstNft]) {
            IBridgeNFT(_dstNft).transferFrom{gas: transferFromGas}(address(this), _receiver, _tokenId);
            require(IBridgeNFT(_dstNft).ownerOf{gas: ownerOfGas}(_tokenId) == _receiver, "transfer NFT failed");
        } else {
            IBridgeNFT(_dstNft).bridgeMint{gas: bridgeMintGas}(_receiver, _tokenId);
        }
        emit Received(_receiver, _dstNft, _tokenId, _srcChid);
    }

    function checkAddr(address _srcNft, uint256 _dstChid) internal view returns (address dstNft_) {
        dstNft_ = destNFTAddr[_srcNft][_dstChid];
        require(dstNft_ != address(0), "dest NFT not found");
    }

    function withdraw(address _to) external onlyOwner {
        payable(_to).transfer(address(this).balance);
    }
}