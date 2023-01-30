import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { owner, proxyAdmin } = CONTRACTS[network.name];

async function main() {
  const nonce = await ethers.provider.getTransactionCount(owner);
  // step 1: deploy ft
  const _factory = await ethers.getContractFactory("Metadata");
  const factory = await _factory.deploy({ nonce: nonce });
  await factory.deployed();
  console.log(`deploy logic contract for Metadata : ${factory.address}`);

  const _metadataProxy = await ethers.getContractFactory(
    "AdminUpgradeabilityProxy"
  );
  const metadataProxy = await _metadataProxy.deploy(
    factory.address,
    proxyAdmin,
    factory.interface.encodeFunctionData("initialize"),
    { nonce: nonce + 1 }
  );
  await metadataProxy.deployed();
  console.log(`Metadata address: ${metadataProxy.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
