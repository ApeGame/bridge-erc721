import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import * as zk from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { CONTRACTS } from "../config";

const admin = "0xdab136d1aacef7417d32ae6b8b13651dba4dd580";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  const { bridge, proxyAdmin, ownerPrivate } = CONTRACTS[hre.network.name];

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
  await Bridge.setAdmin(admin, true);
  console.log("bridge setadmin completed");
}
