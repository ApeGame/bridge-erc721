import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { metadata } = CONTRACTS[network.name];

const nft = "0xA8eD7589fa13263B3758d30672FA01dd13D23748";
const tokenId = 222;
async function main() {
  const factory = await ethers.getContractAt("Metadata", metadata);
  const metaDataInfo = await factory.getMetadataInfo(nft, tokenId);
  console.log(metaDataInfo);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
