import { Wallet } from "ethers";
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { metadatav2, proxyAdminPrivate } = CONTRACTS[network.name];

async function main() {
  // step 1: deploy bridge
  const _factory = await ethers.getContractFactory("MetadataV2");
  const factory = await _factory.deploy();
  await factory.deployed();
  console.log(`deploy logic contract for MetadataV2 : ${factory.address}`);

  // upgrade
  const wallet = new Wallet(proxyAdminPrivate, ethers.provider);
  const _metadataProxy = await ethers.getContractAt(
    "AdminUpgradeabilityProxy",
    metadatav2
  );
  const tx = await _metadataProxy.connect(wallet).upgradeTo(factory.address);
  await tx.wait();
  console.log(`MetadataV2 upgrade complete`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
