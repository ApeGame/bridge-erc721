import { Wallet } from "ethers";
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { metadata, proxyAdminPrivate } = CONTRACTS[network.name];

async function main() {
  // step 1: deploy bridge
  const _factory = await ethers.getContractFactory("Metadata");
  const factory = await _factory.deploy();
  await factory.deployed();
  console.log(`deploy logic contract for Metadata : ${factory.address}`);

  // upgrade
  const wallet = new Wallet(proxyAdminPrivate, ethers.provider);
  const _metadataProxy = await ethers.getContractAt(
    "AdminUpgradeabilityProxy",
    metadata
  );
  const tx = await _metadataProxy.connect(wallet).upgradeTo(factory.address);
  await tx.wait();
  console.log(`Bridge upgrade complete`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
