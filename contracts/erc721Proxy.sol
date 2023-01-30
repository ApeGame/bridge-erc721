// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./interface/IErc721Proxy.sol";
import "./lib/Verify.sol";

contract Erc721Proxy is OwnableUpgradeable, Verify{
    mapping (address => bool) public admin;
    uint256 public txFee;

    struct campaign {
        address contractAddress;
        address payeeAddress;
        uint256 price;
    }

    mapping (address => campaign) public campaigns;

    mapping (address => mapping (address => mapping (uint256 => uint256))) preMintRecord;

    event SetCampaign(address indexed nft, address indexed payee, uint256 price);
    event DelCampaign(address indexed nft);
    event PreMint(address sender, address srcNft, uint256 tokenID);
    event ProxyMinted(address reciver, address srcNft, uint256 tokenID);
    modifier onlyAdmin() {
        require(
            admin[msg.sender] || owner() == msg.sender,
            "Admin: caller is not the admin"
        );
        _;
    }

    function initialize()
        public
        initializer
    {
        __Ownable_init();
    }

    function setAdmin(address _user, bool _auth) external onlyOwner {
        admin[_user] = _auth;
    }

    function setTxFee(uint256 _fee) external onlyAdmin {
        txFee = _fee;
    }

    function setCampaign(address _contract, address _payee, uint256 _price) external onlyAdmin {
        require(_price > txFee, "price must be greater than txfee");
        campaigns[_contract] = campaign(_contract, _payee, _price);
        emit SetCampaign(_contract, _payee, _price);
    }

    function delCampaign(address _contract) external onlyAdmin {
        delete campaigns[_contract];
        emit DelCampaign(_contract);
    }
    
    function preMint(address _srcNft, uint256 _tokenId) external payable {
        require(campaigns[_srcNft].contractAddress != address(0), "contract is not supported");
        require(preMintRecord[msg.sender][_srcNft][_tokenId] == 0, "already preminted");
        require(msg.value >= campaigns[_srcNft].price, "insufficient fee");
        require(!IErc721Proxy(_srcNft).mintedOf(_tokenId), "tokenId always minted");
        emit PreMint(msg.sender, _srcNft, _tokenId);
        preMintRecord[msg.sender][_srcNft][_tokenId] = campaigns[_srcNft].price;

        uint256 valueLeft = msg.value - campaigns[_srcNft].price;
        if (valueLeft > 0) {
            payable(_msgSender()).transfer(valueLeft);
        }
    }

    function refund(address _srcNft, address _reciver, uint256 _tokenId) external onlyAdmin {
        require(preMintRecord[_reciver][_srcNft][_tokenId] > 0, "no preminted");

        if(payable(_reciver).send(preMintRecord[_reciver][_srcNft][_tokenId] - txFee)){
            delete preMintRecord[_reciver][_srcNft][_tokenId];
        }
    }

    function mintTo(address _srcNft, address _reciver, uint256 _tokenId)  external onlyAdmin{
        require(preMintRecord[_reciver][_srcNft][_tokenId] > 0, "no preminted");
        require(campaigns[_srcNft].contractAddress != address(0), "contract is not supported");
        require(!IErc721Proxy(_srcNft).mintedOf(_tokenId), "tokenId always minted");
        require(IErc721Proxy(_srcNft).proxyMint(_reciver, _tokenId),"mint token failed");
        require(_reciver == IErc721Proxy(_srcNft).ownerOf(_tokenId), "tokenId not owner");
        delete preMintRecord[_reciver][_srcNft][_tokenId];

        payable(campaigns[_srcNft].payeeAddress).transfer(campaigns[_srcNft].price - txFee);
        emit ProxyMinted(_reciver, _srcNft, _tokenId);
    }

    function withdraw(address _to) public onlyOwner {
        payable(_to).transfer(address(this).balance);
    }
}