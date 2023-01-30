import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { owner, proxyAdmin } = CONTRACTS[network.name];

async function main() {
  const nonce = await ethers.provider.getTransactionCount(owner);
  // step 1: deploy ft
  const _factory = await ethers.getContractFactory("Erc721Proxy");
  const factory = await _factory.deploy({ nonce: nonce });
  await factory.deployed();
  console.log(`deploy logic contract for erc721proxy : ${factory.address}`);

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
  console.log(`erc721proxy address: ${bridgeProxy.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
