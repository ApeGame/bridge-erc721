// eslint-disable-next-line node/no-missing-import
import { BigNumber } from "ethers";
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../../config";

const bridge: string = "";
const lineamainChainID = 59144;

let chids: number[];
let txfees: BigNumber[];

let srcNftMAF: string = "";
let chidsMAF: number[] = [];
let dstNftsMAF: string[];

let srcNftNoBridgeMAF: string = "";
let chidsNoBridgeMAF: number[] = [];
let dstNftsNoBridgeMAF: string[];

let srcNftRelics: string = "";
let chidsRelics: number[] = [];
let dstNftsRelics: string[];

switch (network.name) {
  case "polygontestzkevm":
    chids = [lineamainChainID];
    txfees = [ethers.utils.parseEther("0.0004")];

    srcNftMAF = "0x852759BDdd5C9170E24135C76957C50A732f1d5a";
    chidsMAF = [lineamainChainID];
    dstNftsMAF = [""];

    srcNftNoBridgeMAF = "0x6CF6384D05EC0c430af3aC46135D4574cCeeF97d";
    chidsNoBridgeMAF = [lineamainChainID];
    dstNftsNoBridgeMAF = [""];

    srcNftRelics = "0x0Ae14d584A55094Eb2f4Ac5B256216649947ca01";
    chidsRelics = [lineamainChainID];
    dstNftsRelics = [""];

    break;
  case "zkSyncMainnet":
    chids = [lineamainChainID];
    txfees = [ethers.utils.parseEther("0.0004")];

    srcNftMAF = "0x78D0c876c658682a3D117a0298aB9Ed3F5D09d29";
    chidsMAF = [lineamainChainID];
    dstNftsMAF = [""];

    srcNftNoBridgeMAF = "0xd522d1ff2842C0446080E80d12C6a18a370beF0b";
    chidsNoBridgeMAF = [lineamainChainID];
    dstNftsNoBridgeMAF = [""];

    srcNftRelics = "0x4f14D5CcC7D9227bd9F8c373128345fEd4936C6f";
    chidsRelics = [lineamainChainID];
    dstNftsRelics = [""];
    break;
}

async function main() {
  const bridgeProxy = await ethers.getContractAt("BridgeNFT", bridge);

  if (network.name === "polygontestzkevm") {
    // Set Bridge Operator as Payee
    const tx = await bridgeProxy.setPayee(
      "0x5767A8EdE4d14595162920C4019a5e79D685FF67"
    );
    await tx.wait();
  }

  if (chids.length > 0 && chids.length === txfees.length) {
    const tx = await bridgeProxy.setTxFee(chids, txfees);
    await tx.wait();
    console.log("setTxFee for bridge complete");
  }

  if (srcNftMAF !== "" && chidsMAF.length > 0) {
    const tx = await bridgeProxy.setDestNftAddr(
      srcNftMAF,
      chidsMAF,
      dstNftsMAF
    );
    await tx.wait();
    console.log("setDestNftAddr for MAF");
  }

  if (srcNftNoBridgeMAF !== "" && chidsNoBridgeMAF.length > 0) {
    const tx = await bridgeProxy.setDestNftAddr(
      srcNftNoBridgeMAF,
      chidsNoBridgeMAF,
      dstNftsNoBridgeMAF
    );
    await tx.wait();
    console.log("setDestNftAddr for NoBridgeMAF");
  }

  if (srcNftRelics !== "" && chidsRelics.length > 0) {
    const tx = await bridgeProxy.setDestNftAddr(
      srcNftRelics,
      chidsRelics,
      dstNftsRelics
    );
    await tx.wait();
    console.log("setDestNftAddr for relics");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
