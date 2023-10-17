// eslint-disable-next-line node/no-missing-import
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { bridge } = CONTRACTS[network.name];

const payee = "0x47879ddeb5c5950d56089db7bc1ba2b8509bf487";

async function main() {
  // 2 setDestNftAddr for bridge
  const bridgeProxy = await ethers.getContractAt("BridgeNFT", bridge);
  const tx = await bridgeProxy.setPayee(payee);
  await tx.wait();
  console.log(`setPayee(${payee}) for bridge`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
