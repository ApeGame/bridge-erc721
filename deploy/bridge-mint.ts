import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import * as zk from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { CONTRACTS } from "../config";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  const { bridge, ownerPrivate } = CONTRACTS[hre.network.name];

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
  const Bridge = await attachTo.attach(bridge);

  //   console.log("set admin completed");
  await Bridge.sendTo(
    56,
    "0x574D7A48a3f2900Aeb34B67feCC21eeD400A4230",
    1,
    "0x20cD8eB93c50BDAc35d6A526f499c0104958e3F6"
  );
  console.log("sendTo completed");
}
