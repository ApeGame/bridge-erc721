import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { metadata } = CONTRACTS[network.name];

const nft = "0x20cD8eB93c50BDAc35d6A526f499c0104958e3F6";
const tokenId = 2222;
async function main() {
  // step 1: deploy ft
  const factory = await ethers.getContractAt("Metadata", metadata);

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
  };
  const tx = await factory.set(nft, tokenId, req);
  await tx.wait();
  console.log(`add(${nft},${tokenId}) for metadata complete`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
