// eslint-disable-next-line node/no-missing-import
import { BigNumber } from "ethers";
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../../config";

const { bridge } = CONTRACTS[network.name];

let chids: number[];
let txfees: BigNumber[];

switch (network.name) {
  case "ankr":
    chids = [97, 80001, 1442];
    txfees = [
      ethers.utils.parseEther("1"),
      ethers.utils.parseEther("0.5"),
      ethers.utils.parseEther("1"),
    ];
    break;
  case "bsctest":
    chids = [12077, 80001, 1442];
    txfees = [
      ethers.utils.parseEther("0.001"),
      ethers.utils.parseEther("0.0015"),
      ethers.utils.parseEther("0.01"),
    ];
    break;
  case "polygontest":
    chids = [12077, 97, 1442];
    txfees = [
      ethers.utils.parseEther("0.01"),
      ethers.utils.parseEther("0.05"),
      ethers.utils.parseEther("0.05"),
    ];
    break;
  case "polygontestzkevm":
    chids = [12077, 97, 80001];
    txfees = [
      ethers.utils.parseEther("0.01"),
      ethers.utils.parseEther("0.05"),
      ethers.utils.parseEther("0.0001"),
    ];
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
