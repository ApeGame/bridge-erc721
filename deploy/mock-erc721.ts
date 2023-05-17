import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
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
  const artifact = await deployer.loadArtifact("MyNFT");

  const erc721NftContract = await deployer.deploy(artifact, ["MT", "my nft"]);

  await erc721NftContract.functions.setBridge(
    "0x1308C964ae66B70f86DF57E885e78E8678B9E09D",
    true
  );

  console.log(
    `${artifact.contractName} was deployed to ${erc721NftContract.address}`
  );

  await hre.run("verify:verify", {
    address: erc721NftContract.address,
    contract: artifact.sourceName + ":" + artifact.contractName,
    constructorArguments: ["MT", "my nft"],
  });

  // 0x4330518810De37BaE35F241Ed78Ba1b772D3396E
}
