import { Wallet } from "ethers";
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { owner, bridge, proxyAdminPrivate } = CONTRACTS[network.name];

async function main() {
  const nonce = await ethers.provider.getTransactionCount(owner);
  // step 1: deploy bridge
  const _factory = await ethers.getContractFactory("BridgeNFT");
  const factory = await _factory.deploy({ nonce: nonce });
  await factory.deployed();
  console.log(`deploy logic contract for BridgeNFT : ${factory.address}`);

  // upgrade
  const wallet = new Wallet(proxyAdminPrivate, ethers.provider);
  const _bridgeProxy = await ethers.getContractAt(
    "AdminUpgradeabilityProxy",
    bridge
  );
  const tx = await _bridgeProxy.connect(wallet).upgradeTo(factory.address);
  await tx.wait();
  console.log(`Bridge upgrade complete`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
