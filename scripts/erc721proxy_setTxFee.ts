import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { erc721proxy } = CONTRACTS[network.name];

const fee = ethers.utils.parseEther("0.01");
async function main() {
  // step 1: deploy ft
  const proxy = await ethers.getContractAt("Erc721Proxy", erc721proxy);

  const tx = await proxy.setTxFee(fee);
  await tx.wait();

  console.log(`setTxFee(${fee}) complete`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
