import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { metadatav2 } = CONTRACTS[network.name];

const nft = "0x20cD8eB93c50BDAc35d6A526f499c0104958e3F6";
const tokenId = 2222;
async function main() {
  // step 1: deploy ft
  const factory = await ethers.getContractAt("MetadataV2", metadatav2);

  const req = {
    name: "aaa",
    image: "http://aaa.com",
    index: "201111",
    description: "aaaa desc",
    attributes: [
      {
        value: "test1",
        traitType: "test1",
      },
      {
        value: "test2",
        traitType: "test2",
      },
    ],
    detail: "金明智是好人",
  };
  const tx = await factory.set(tokenId, req);
  await tx.wait();
  console.log(`add(${nft},${tokenId}) for metadata complete`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
