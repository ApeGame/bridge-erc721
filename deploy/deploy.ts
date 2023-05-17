import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import * as zk from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { CONTRACTS } from "../config";

const admin = "0xdab136d1aacef7417d32ae6b8b13651dba4dd580";
// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  const { proxyAdmin, ownerPrivate } = CONTRACTS[hre.network.name];

  // // Initialize the wallet.
  const wallet = new Wallet(ownerPrivate);

  // // Create deployer object and load the artifact of the contract you want to deploy.
  const deployer = new Deployer(hre, wallet);

  // deploy logic contract
  const artifact = await deployer.loadArtifact("BridgeNFT");
  const bridgeNftContract = await deployer.deploy(artifact, []);

  // deploy proxt contract
  const proxyArtifact = await deployer.loadArtifact("AdminUpgradeabilityProxy");
  const proxtContract = await deployer.deploy(proxyArtifact, [
    bridgeNftContract.address,
    proxyAdmin,
    bridgeNftContract.interface.encodeFunctionData("initialize"),
  ]);

  console.log(
    `${artifact.contractName} was deployed to ${proxtContract.address}`
  );

  const attachTo = new zk.ContractFactory(
    artifact.abi,
    artifact.bytecode,
    deployer.zkWallet,
    deployer.deploymentType
  );
  const bridge = await attachTo.attach(proxtContract.address);

  // set bridge gas
  await bridge.setBridgeGas(300000, 50000, 200000);
  console.log("bridge setBridgeGas completed");

  // set admin
  await bridge.setAdmin(admin, true);
  console.log("bridge setAdmin completed");

  // verify contract
  await hre.run("verify:verify", {
    address: bridgeNftContract.address,
    contract: artifact.sourceName + ":" + artifact.contractName,
    constructorArguments: [],
  });

  await hre.run("verify:verify", {
    address: proxtContract.address,
    contract: proxyArtifact.sourceName + ":" + proxyArtifact.contractName,
    constructorArguments: [
      bridgeNftContract.address,
      proxyAdmin,
      bridgeNftContract.interface.encodeFunctionData("initialize"),
    ],
  });

  // 0x1308C964ae66B70f86DF57E885e78E8678B9E09D
}
