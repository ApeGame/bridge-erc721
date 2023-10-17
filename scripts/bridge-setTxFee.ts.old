// eslint-disable-next-line node/no-missing-import
import { BigNumber } from "ethers";
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { bridge } = CONTRACTS[network.name];

let chids: number[];
let txfees: BigNumber[];

switch (network.name) {
  case "bscmainnet":
    chids = [16350];
    txfees = [ethers.utils.parseEther("0.002")];
    break;
  case "apemain":
    chids = [56];
    txfees = [ethers.utils.parseEther("5")];
    break;
}

async function main() {
  if (chids.length > 0 && chids.length === txfees.length) {
    const bridgeProxy = await ethers.getContractAt("BridgeNFT", bridge);
    const tx = await bridgeProxy.setTxFee(chids, txfees);
    await tx.wait();
    console.log("setTxFee for bridge complete");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
