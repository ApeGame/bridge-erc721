// eslint-disable-next-line node/no-missing-import
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { bridge } = CONTRACTS[network.name];

const admin: string = "0xd6a5914e2b8676bd8fd2fcd9c0fd1fcf1b5a9411";

async function main() {
  const bridgeProxy = await ethers.getContractAt("BridgeNFT", bridge);
  const tx = await bridgeProxy.setAdmin(admin, true);

  console.log(`bridge setAdmin tx: ${tx.hash}`);
  await tx.wait();
  console.log("bridge setAdmin complete");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
