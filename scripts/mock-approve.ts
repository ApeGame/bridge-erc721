import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { mockerc721, bridge } = CONTRACTS[network.name];

const tokenId: number = 999;
async function main() {
  const nft = await ethers.getContractAt("MyNFT", mockerc721);
  const owner = await nft.ownerOf(tokenId);
  console.log(`tokenId(${tokenId}) ownerOf: ${owner}`);

  const tx = await nft.approve(bridge, tokenId);
  await tx.wait();
  console.log(`approve tokenID(${tokenId}) to bridge`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
