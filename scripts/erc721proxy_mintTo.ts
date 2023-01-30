import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { owner, mockerc721, erc721proxy } = CONTRACTS[network.name];

const tokenID = 222;
async function main() {
  // step 1: deploy ft
  const proxy = await ethers.getContractAt("Erc721Proxy", erc721proxy);

  const tx = await proxy.mintTo(mockerc721, owner, tokenID);
  await tx.wait();

  console.log(`mintTo(${mockerc721}, ${owner}, ${tokenID}) complete`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
