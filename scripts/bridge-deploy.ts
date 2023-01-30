import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { owner, proxyAdmin } = CONTRACTS[network.name];

async function main() {
  const nonce = await ethers.provider.getTransactionCount(owner);
  // step 1: deploy bridgeNFT
  const _factory = await ethers.getContractFactory("BridgeNFT");
  const factory = await _factory.deploy({ nonce: nonce });
  await factory.deployed();
  console.log(`deploy logic contract for BridgeNFT : ${factory.address}`);

  const _bridgeProxy = await ethers.getContractFactory(
    "AdminUpgradeabilityProxy"
  );
  const bridgeProxy = await _bridgeProxy.deploy(
    factory.address,
    proxyAdmin,
    factory.interface.encodeFunctionData("initialize"),
    { nonce: nonce + 1 }
  );
  await bridgeProxy.deployed();
  console.log(`Bridge address: ${bridgeProxy.address}`);

  const bridge = await ethers.getContractAt("BridgeNFT", bridgeProxy.address);
  const tx = await bridge.setBridgeGas(300000, 50000, 200000);
  await tx.wait();
  console.log(`setBridgeGas complete`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
