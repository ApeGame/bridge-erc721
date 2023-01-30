import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { mockerc721, erc721proxy } = CONTRACTS[network.name];

const price = ethers.utils.parseEther("0.1");
const tokenID = 222;
async function main() {
  // step 1: deploy ft
  const proxy = await ethers.getContractAt("Erc721Proxy", erc721proxy);

  const tx = await proxy.preMint(mockerc721, tokenID, { value: price });
  await tx.wait();

  console.log(`preMint(${mockerc721}, ${tokenID}, {value: ${price}}) complete`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
