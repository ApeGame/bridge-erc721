import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { mockerc721 } = CONTRACTS[network.name];

const to: string = "0x59F2f1fCfE2474fD5F0b9BA1E73ca90b143Eb8d0";
async function main() {
  const nft = await ethers.getContractAt("MyNFT", mockerc721);
  const tx = await nft.setBridge(to, true);
  await tx.wait();
  console.log(`setAdmin complete`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
