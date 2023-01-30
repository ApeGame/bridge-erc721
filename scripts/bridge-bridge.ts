import { utils } from "ethers";
// eslint-disable-next-line node/no-missing-import
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { bridge } = CONTRACTS[network.name];

const srcNft: string = "0x948B3c65b89DF0B4894ABE91E6D02FE579834F8F";
const dstChId: number = 1307;
const tokenId: number = 11527;
const reciver: string = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

async function main() {
  const bridgeProxy = await ethers.getContractAt("BridgeNFT", bridge);
  const tx = await bridgeProxy.bridge(srcNft, tokenId, dstChId, reciver, {
    value: utils.parseEther("100"),
  });
  console.log(`bridge sendto tx: ${tx.hash}`);
  await tx.wait();
  console.log("bridge sendTo complete");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
