// eslint-disable-next-line node/no-missing-import
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { bridge, mockerc721 } = CONTRACTS[network.name];

const chainId: number = 97;
const dstNft: string = mockerc721;
const tokenId: number = 11527;
const reciver: string = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8";

async function main() {
  const bridgeProxy = await ethers.getContractAt("BridgeNFT", bridge);
  const tx = await bridgeProxy.sendTo(chainId, dstNft, tokenId, reciver);
  console.log(`bridge sendto tx: ${tx.hash}`);
  await tx.wait();
  console.log("bridge sendTo complete");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
