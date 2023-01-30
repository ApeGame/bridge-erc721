//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IErc721Proxy {
    function mintedOf(uint256 tokenId) external view returns(bool);
    function ownerOf(uint256 tokenId) external view returns (address owner);
    function proxyMint(address to, uint256 tokenID) external returns(bool pass);
}