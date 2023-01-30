// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
contract Metadata is OwnableUpgradeable{
    mapping(address => bool) public admin;
    struct attr {
        string value;
        string traitType;
    }
    struct metadataInfo {
        string name;
        string index;
        string image;
        string description;
        attr[] attributes;
    }

    mapping (address => mapping (uint256 => metadataInfo)) public metadatas;

    event AddMetadata(address indexed nft, uint256 indexed tokenId, metadataInfo data);
    event DelMetadata(address indexed nft, uint256 indexed tokenId);

    modifier onlyAdmin() {
        require(
            admin[msg.sender] || owner() == msg.sender,
            "Admin: caller is not the admin"
        );
        _;
    }

    function initialize() public initializer {
        __Ownable_init();
    }

    function setAdmin(address _user, bool _auth) external onlyOwner {
        admin[_user] = _auth;
    }

    function set(address _nft, uint256 _tokenId, metadataInfo calldata _data) external onlyAdmin {
        require(bytes(_data.name).length > 0 && bytes(_data.name).length < 256, "name cannot be empty and length should be less than 256");
        require(bytes(_data.image).length > 0, "image uri cannot be empty");
        metadatas[_nft][_tokenId] = _data;
        emit AddMetadata(_nft, _tokenId, _data);
    }

    function del(address _nft, uint256 _tokenId) external onlyAdmin {
        delete metadatas[_nft][_tokenId];
        emit DelMetadata(_nft, _tokenId);
    }

    function getMetadataInfo(address _nft, uint256 _tokenId) public view returns (metadataInfo memory data) {
        return metadatas[_nft][_tokenId];
    }
}