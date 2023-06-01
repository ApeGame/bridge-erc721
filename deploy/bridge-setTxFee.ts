import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import * as zk from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { CONTRACTS } from "../config";

let chids: number[];
let txfees: ethers.BigNumber[];

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  const { bridge, proxyAdmin, ownerPrivate } = CONTRACTS[hre.network.name];

  switch (hre.network.name) {
    case "zkSyncTestnet":
      chids = [12077, 97, 80001, 1442];
      txfees = [
        ethers.utils.parseEther("0.0001"),
        ethers.utils.parseEther("0.005"),
        ethers.utils.parseEther("0.001"),
        ethers.utils.parseEther("0.001"),
      ];
      break;
    case "zkSyncMainnet":
      chids = [16350, 137, 56, 1101];
      txfees = [
        ethers.utils.parseEther("0.0001"),
        ethers.utils.parseEther("0.0001"),
        ethers.utils.parseEther("0.0005"),
        ethers.utils.parseEther("0.001"),
      ];
      break;
  }

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

  await Bridge.setTxFee(chids, txfees);
}
