import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { metadatav2 } = CONTRACTS[network.name];

const to = "0x068159b7Fd0858fAe6CeD69FE99ddA122CC84d12";
async function main() {
  // step 1: deploy ft
  const factory = await ethers.getContractAt("MetadataV2", metadatav2);
  const tx = await factory.setAdmin(to, true);
  await tx.wait();
  console.log(`setAdmin(${to}) for metadata complete`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
