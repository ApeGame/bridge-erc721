import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { owner, mockerc721, erc721proxy } = CONTRACTS[network.name];

const tokenID = 222;
async function main() {
  const proxy = await ethers.getContractAt("Erc721Proxy", erc721proxy);

  let balance = await ethers.provider.getBalance(owner);
  console.log(`refund before: ${balance}`);
  const tx = await proxy.refund(mockerc721, owner, tokenID);
  await tx.wait();

  balance = await ethers.provider.getBalance(owner);
  console.log(`refund after:  ${balance}`);

  console.log(`refund(${mockerc721}, ${owner}, ${tokenID}) complete`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
