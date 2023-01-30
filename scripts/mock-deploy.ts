import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { owner, bridge } = CONTRACTS[network.name];

async function main() {
  // 1 depoy mock
  const nonce = await ethers.provider.getTransactionCount(owner);
  const _nft = await ethers.getContractFactory("MyNFT");
  const nft = await _nft.deploy("aaa", "bbb", { nonce: nonce });

  console.log(`MyNFT address: ${nft.address}`);

  const tx = await nft.setBridge(bridge, true, { nonce: nonce + 1 });
  await tx.wait();
  console.log("set bridge complete");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
