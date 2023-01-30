// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";

contract MyNFT is ERC721Upgradeable, OwnableUpgradeable{
    mapping (address => bool) public bridgeAddrs;
    mapping (address => bool) public admin;
    string baseUrl;
    
    modifier onlyBridge() {
        require(bridgeAddrs[_msgSender()], "Only bridge can be used");
        _;
    }

    modifier onlyAdmin() {
        require(
            admin[msg.sender] || owner() == msg.sender,
            "Admin: caller is not the admin"
        );
        _;
    }

    constructor(string memory _name, string memory _symbol) initializer {
        __ERC721_init(_name, _symbol);
        __Ownable_init();
    }

    function setBaseUrl(string memory _url) external onlyAdmin{
        baseUrl = _url;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseUrl;
    }

    function adminMint(address _to, uint256 _tokenID) external onlyAdmin {
        _mint(_to, _tokenID);
    }

    function setAdmin(address _user, bool _auth) external onlyOwner {
        admin[_user] = _auth;
    }

    function setBridge(address _bridge,bool _auth) external {
        bridgeAddrs[_bridge] = _auth;
    }

    function checkBridge(uint256 tokenID) public view onlyBridge returns(bool pass){
        if(tokenID>1 && tokenID <1000000) {
            return true;
        }
        return false;
    }

    function bridgeMint(address _to, uint256 _tokenID) external onlyBridge{
        _mint(_to, _tokenID);
    }

    function bridgeBurn(uint256 _tokenID) external onlyBridge{
        require(_isApprovedOrOwner(_msgSender(), _tokenID), "ERC721: burn caller is not owner nor approved");
        _burn(_tokenID);
    }

    function mintedOf(uint256 tokenId) external view returns(bool) {
        return _exists(tokenId);
    }
    function proxyMint(address _to, uint256 _tokenID) external onlyBridge returns(bool pass) {
        _mint(_to, _tokenID);
        return true;
    }
}
