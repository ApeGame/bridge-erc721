// eslint-disable-next-line node/no-missing-import
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../../config";

const { bridge } = CONTRACTS[network.name];

const admin: string = "0xdab136d1aacef7417d32ae6b8b13651dba4dd580";

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
