import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { metadata } = CONTRACTS[network.name];

const nft = "0xA8eD7589fa13263B3758d30672FA01dd13D23748";
const tokenId = 222;
async function main() {
  // step 1: deploy ft
  const factory = await ethers.getContractAt("Metadata", metadata);
  const tx = await factory.del(nft, tokenId);
  await tx.wait();
  console.log(`del(${nft},${tokenId}) for metadata complete`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
