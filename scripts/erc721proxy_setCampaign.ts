import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { mockerc721, erc721proxy, proxyAdmin } = CONTRACTS[network.name];

const price = ethers.utils.parseEther("0.02");
async function main() {
  // step 1: deploy ft
  const proxy = await ethers.getContractAt("Erc721Proxy", erc721proxy);

  const tx = await proxy.setCampaign(mockerc721, proxyAdmin, price);
  await tx.wait();

  console.log(`setCampaign(${mockerc721}, ${proxyAdmin}, ${price}) complete`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
