import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { metadatav2 } = CONTRACTS[network.name];

const tokenId = 2222;
async function main() {
  const factory = await ethers.getContractAt("MetadataV2", metadatav2);
  const metaDataInfo = await factory.getDetail(tokenId);
  console.log(metaDataInfo);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
