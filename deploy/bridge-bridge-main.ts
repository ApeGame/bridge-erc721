import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import * as zk from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { CONTRACTS } from "../config";
const admin = "0x5767A8EdE4d14595162920C4019a5e79D685FF67";

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

  await Bridge.setPayee(admin);
  console.log(`set payee completed`);
  // 56 bsc
  // 16350 ape
  // 137 polygon
  // 1101 polygon zkevm
  // 324 zksync

  // MAF
  await Bridge.setDestNftAddr(
    "0x78D0c876c658682a3D117a0298aB9Ed3F5D09d29",
    [16350, 137, 56, 1101],
    [
      "0x2562a3C729F71825415993335d5a759A3c4c21fc",
      "0x5409A1CD58FAF6d2Ad5Abc30c4C550C9fa85C909",
      "0x5704075803A122Fc5afc8B60f07B84B77e065B5e",
      "0x852759BDdd5C9170E24135C76957C50A732f1d5a",
    ]
  );
  console.log("MAF setDestNftAddr completed");

  // MAR
  await Bridge.setDestNftAddr(
    "0x4f14D5CcC7D9227bd9F8c373128345fEd4936C6f",
    [16350, 137, 1101],
    [
      "0xA72b7321517A763Dd879019564406fB5fC39cfd0",
      "0xe13c50c3120eEf7731B7223905701D2cA8E68882",
      "0x0Ae14d584A55094Eb2f4Ac5B256216649947ca01",
    ]
  );
  console.log("MAR setDestNftAddr completed");

  // not bridge MAF
  await Bridge.setDestNftAddr(
    "0xd522d1ff2842C0446080E80d12C6a18a370beF0b",
    [16350, 137, 1101],
    [
      "0xc805C32B3D9a29E54F6c01d4d0a322697BE23C64",
      "0x721e4D95b8e0A8D5d2475a945d1CB1054bB932D0",
      "0x6CF6384D05EC0c430af3aC46135D4574cCeeF97d",
    ]
  );
  console.log("not bridge MAF setDestNftAddr completed");
}
