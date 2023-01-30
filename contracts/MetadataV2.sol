// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
contract MetadataV2 is OwnableUpgradeable{
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
        string detail;
    }

    struct metadataInfoResp {
        string name;
        string index;
        string image;
        string description;
        attr[] attributes;
    }

    mapping (uint256 => metadataInfo) private metadatas;

    event AddMetadata(uint256 indexed tokenId, metadataInfo data);
    event DelMetadata(uint256 indexed tokenId);

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

    function set(uint256 _tokenId, metadataInfo calldata _data) external onlyAdmin {
        require(bytes(_data.name).length > 0 && bytes(_data.name).length < 256, "name cannot be empty and length should be less than 256");
        require(bytes(_data.image).length > 0, "image uri cannot be empty");
        metadatas[_tokenId] = _data;
        emit AddMetadata(_tokenId, _data);
    }

    function del(uint256 _tokenId) external onlyAdmin {
        delete metadatas[_tokenId];
        emit DelMetadata(_tokenId);
    }

    function getMetadataInfo(uint256 _tokenId) public view returns (metadataInfoResp memory data) {
        metadataInfo storage info = metadatas[_tokenId];
        return metadataInfoResp({
            name: info.name,
            index: info.index,
            image: info.image,
            description: info.description,
            attributes: info.attributes
        });
    }

    function getDetail(uint256 _tokenId) public view returns (string memory data) {
        return metadatas[_tokenId].detail;
    }
}