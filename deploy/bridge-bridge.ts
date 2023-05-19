import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import * as zk from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { CONTRACTS } from "../config";

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

  // 97 bsc test
  // 12077 coq
  // 80001 polygon test
  // 1442 polygon zkevm
  // 280 zksync test

  // MAF
  await Bridge.setDestNftAddr(
    "0x4d11C4B19FC2C93D2aDecb7D1C7362484B35a566",
    [97, 12077, 80001, 1442],
    [
      "0x6Be6B9b8FA71D150Ca7e3A6431FdA868a099A288",
      "0x866df3e1b203cc3bf50eb4f707d29ce5b665d4d1",
      "0x3c9bEc762e3C78357B7300701aBaF1d8cDC9678c",
      "0xaC8C25a8D2e3d26795A43Cee3315B214D4a6F2Fa",
    ]
  );
  console.log("MAF setDestNftAddr completed");

  // MAR
  await Bridge.setDestNftAddr(
    "0x226d9DF3Cf487aCd1B384dc180a93B6618C11102",
    [12077, 80001, 1442],
    [
      "0x41ecfB27845912A952A1774971d6F9D95C84c370",
      "0x77E825be7701Fe49D4b825304C77B3754f80D54d",
      "0xea521f8Befd103F0A462ff81b3cBc8A0ebb65987",
    ]
  );
  console.log("MAR setDestNftAddr completed");

  // not bridge MAF
  await Bridge.setDestNftAddr(
    "0x574D7A48a3f2900Aeb34B67feCC21eeD400A4230",
    [12077, 1442],
    [
      "0x16e1b5517945Ed455CdfE91d2bE50CA293Ebb754",
      "0xf039e0C2Bb17709eCA6E1be4A80aE1705841e196",
    ]
  );
  console.log("not bridge MAF setDestNftAddr completed");
}
