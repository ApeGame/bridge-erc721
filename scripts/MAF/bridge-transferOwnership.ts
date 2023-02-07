import { Wallet } from "ethers";
// eslint-disable-next-line node/no-missing-import
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../../config";

const { bridge, proxyAdminPrivate } = CONTRACTS[network.name];

let newProxyOwner;
let newOwner;

async function main() {
  if (network.name === "apemain") {
    newProxyOwner = "0x3D92F315B486BaEC3a8ad115DD3ce1703F7A8aC7";
    newOwner = "0xE874838932Fd109081FB36D76672925Fbc429E85";
  } else if (network.name === "bscmainnet") {
    newProxyOwner = "0x5fD2FC2b39d6111FaF6B8dC79C5980E6BD8a9D92";
    newOwner = "0x8909bB393bB4fF776b490f79C5Fab60edd70e88e";
  } else if (network.name === "apetest") {
    newProxyOwner = "0x2888bd9f530B27831cBa0A4f83E788AD342761c8";
    newOwner = "0x019328A57a91386F4FC8aC66E1880478440d79eC";
  } else {
    return;
  }

  // transferOwnership
  const bridgeProxy = await ethers.getContractAt("BridgeNFT", bridge);
  await bridgeProxy.transferOwnership(newOwner);

  const proxy = await ethers.getContractAt("AdminUpgradeabilityProxy", bridge);
  await proxy
    .connect(new Wallet(proxyAdminPrivate, ethers.provider))
    .changeAdmin(newProxyOwner);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
