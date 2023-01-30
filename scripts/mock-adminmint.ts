import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { mockerc721 } = CONTRACTS[network.name];

const tokenId: number = 999520;
const to: string = "0x20cD8eB93c50BDAc35d6A526f499c0104958e3F6";
async function main() {
  const nft = await ethers.getContractAt("MyNFT", mockerc721);
  const tx = await nft.adminMint(to, tokenId);
  await tx.wait();
  console.log(`adminMint complete`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
