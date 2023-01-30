// eslint-disable-next-line node/no-missing-import
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { bridge } = CONTRACTS[network.name];

const srcNft: string = "0x948B3c65b89DF0B4894ABE91E6D02FE579834F8F";
const tokenId: number = 999;
const sender: string = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8";

async function main() {
  const bridgeProxy = await ethers.getContractAt("BridgeNFT", bridge);
  const tx = await bridgeProxy.bridgeCallBack(sender, srcNft, tokenId);
  console.log(`bridge bridgeCallBack tx: ${tx.hash}`);
  await tx.wait();
  console.log("bridge bridgeCallBack complete");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
