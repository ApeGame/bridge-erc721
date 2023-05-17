import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import * as zk from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { CONTRACTS } from "../config";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  const { proxyAdmin, ownerPrivate } = CONTRACTS[hre.network.name];

  // // Initialize the wallet.
  const wallet = new Wallet(ownerPrivate);

  // // Create deployer object and load the artifact of the contract you want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("BridgeNFT");

  const attachTo = new zk.ContractFactory(
    artifact.abi,
    artifact.bytecode,
    deployer.zkWallet,
    deployer.deploymentType
  );
  const bridge = await attachTo.attach(
    "0x1308C964ae66B70f86DF57E885e78E8678B9E09D"
  );

  //   await bridge.setAdmin("0x5fd8b97F8D8DA84813F583C42d40D1e5A4DA9A17", true);

  //   console.log("set admin completed");
  await bridge.sendTo(
    56,
    "0xA050dad9CfFAD1A422Dc0CD5aeD7b0d4D847259D",
    121,
    "0x20cD8eB93c50BDAc35d6A526f499c0104958e3F6"
  );
  console.log("sendTo completed");
  // 0x256bA56E49D8Bb1690B870522B6DEd9636c523fC
}
