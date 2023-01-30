import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { mockerc721 } = CONTRACTS[network.name];

const to: string = "0x5257ad0c2dCFfCC0B3a30eAed151E76fF441Eb60";
async function main() {
  const nft = await ethers.getContractAt("MyNFT", mockerc721);
  const tx = await nft.setAdmin(to, true);
  await tx.wait();
  console.log(`setAdmin complete`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
