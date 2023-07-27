// eslint-disable-next-line node/no-missing-import
import { BigNumber } from "ethers";
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../../config";

const { bridge } = CONTRACTS[network.name];

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

const coqtestChainID = 12077;
const bsctestChainID = 97;
const polygontestChainID = 80001;
const zkSyncTestnetChainID = 280;
const polygontestzkevmChainID = 1442;
const lineatestChainID = 59140;
const basegoerliChainID = 84531;

switch (network.name) {
  case "basegoerli":
    chids = [
      coqtestChainID,
      bsctestChainID,
      polygontestChainID,
      zkSyncTestnetChainID,
      polygontestzkevmChainID,
      lineatestChainID,
    ];
    txfees = [
      ethers.utils.parseEther("0.01"),
      ethers.utils.parseEther("0.05"),
      ethers.utils.parseEther("0.0001"),
      ethers.utils.parseEther("0.0001"),
      ethers.utils.parseEther("0.0001"),
      ethers.utils.parseEther("0.0001"),
    ];
    srcNftMAF = "0xA4AB4f1450876b849a8ab3f1eB2284046a77a4C7";
    chidsMAF = [
      coqtestChainID,
      bsctestChainID,
      polygontestChainID,
      zkSyncTestnetChainID,
      polygontestzkevmChainID,
      lineatestChainID,
    ];
    dstNftsMAF = [
      "0x866df3e1b203cc3bf50eb4f707d29ce5b665d4d1",
      "0x6Be6B9b8FA71D150Ca7e3A6431FdA868a099A288",
      "0x3c9bEc762e3C78357B7300701aBaF1d8cDC9678c",
      "0x4d11C4B19FC2C93D2aDecb7D1C7362484B35a566",
      "0xaC8C25a8D2e3d26795A43Cee3315B214D4a6F2Fa",
      "0x84868afcC4Ba758a4ae2aca141D2fF0ECD8C5fac",
    ];

    srcNftNoBridgeMAF = "0x8239E2903B1ABAa532fd29285c9A48ACB744bE31";
    chidsNoBridgeMAF = [
      coqtestChainID,
      polygontestzkevmChainID,
      zkSyncTestnetChainID,
      lineatestChainID,
    ];
    dstNftsNoBridgeMAF = [
      "0x16e1b5517945Ed455CdfE91d2bE50CA293Ebb754",
      "0xf039e0C2Bb17709eCA6E1be4A80aE1705841e196",
      "0x574D7A48a3f2900Aeb34B67feCC21eeD400A4230",
      "0xBedb5e825989B8ef4B195bfC3A9196eEC35Beae4",
    ];

    srcNftRelics = "0xc4CdC62E2D5c57A2a06aF9D5332D4bc18De1B553";
    chidsRelics = [
      coqtestChainID,
      polygontestChainID,
      polygontestzkevmChainID,
      zkSyncTestnetChainID,
      lineatestChainID,
    ];
    dstNftsRelics = [
      "0x41ecfB27845912A952A1774971d6F9D95C84c370",
      "0x77E825be7701Fe49D4b825304C77B3754f80D54d",
      "0xea521f8Befd103F0A462ff81b3cBc8A0ebb65987",
      "0x226d9DF3Cf487aCd1B384dc180a93B6618C11102",
      "0x6dce96014708eEC5fa697770841be06BFCc5A3ef",
    ];
    break;

  case "lineatest":
    chids = [basegoerliChainID];
    txfees = [ethers.utils.parseEther("0001")];

    srcNftMAF = "0x84868afcC4Ba758a4ae2aca141D2fF0ECD8C5fac";
    chidsMAF = [basegoerliChainID];
    dstNftsMAF = ["0xA4AB4f1450876b849a8ab3f1eB2284046a77a4C7"];

    srcNftNoBridgeMAF = "0xBedb5e825989B8ef4B195bfC3A9196eEC35Beae4";
    chidsNoBridgeMAF = [basegoerliChainID];
    dstNftsNoBridgeMAF = ["0x8239E2903B1ABAa532fd29285c9A48ACB744bE31"];

    srcNftRelics = "0x6dce96014708eEC5fa697770841be06BFCc5A3ef";
    chidsRelics = [basegoerliChainID];
    dstNftsRelics = ["0xc4CdC62E2D5c57A2a06aF9D5332D4bc18De1B553"];
    break;
  case "ankr":
    chids = [basegoerliChainID];
    txfees = [ethers.utils.parseEther("1")];

    srcNftMAF = "0x866df3e1b203cc3bf50eb4f707d29ce5b665d4d1";
    chidsMAF = [basegoerliChainID];
    dstNftsMAF = ["0xA4AB4f1450876b849a8ab3f1eB2284046a77a4C7"];

    srcNftNoBridgeMAF = "0x16e1b5517945Ed455CdfE91d2bE50CA293Ebb754";
    chidsNoBridgeMAF = [basegoerliChainID];
    dstNftsNoBridgeMAF = ["0x8239E2903B1ABAa532fd29285c9A48ACB744bE31"];

    srcNftRelics = "0x41ecfB27845912A952A1774971d6F9D95C84c370";
    chidsRelics = [basegoerliChainID];
    dstNftsRelics = ["0xc4CdC62E2D5c57A2a06aF9D5332D4bc18De1B553"];
    break;
  case "bsctest":
    chids = [basegoerliChainID];
    txfees = [ethers.utils.parseEther("0.01")];

    srcNftMAF = "0x6Be6B9b8FA71D150Ca7e3A6431FdA868a099A288";
    chidsMAF = [basegoerliChainID];
    dstNftsMAF = ["0xA4AB4f1450876b849a8ab3f1eB2284046a77a4C7"];
    break;
  case "polygontest":
    chids = [basegoerliChainID];
    txfees = [ethers.utils.parseEther("0.05")];

    srcNftMAF = "0x3c9bEc762e3C78357B7300701aBaF1d8cDC9678c";
    chidsMAF = [basegoerliChainID];
    dstNftsMAF = ["0xA4AB4f1450876b849a8ab3f1eB2284046a77a4C7"];

    srcNftRelics = "0x77E825be7701Fe49D4b825304C77B3754f80D54d";
    chidsRelics = [basegoerliChainID];
    dstNftsRelics = ["0xc4CdC62E2D5c57A2a06aF9D5332D4bc18De1B553"];
    break;
  case "polygontestzkevm":
    chids = [basegoerliChainID];
    txfees = [ethers.utils.parseEther("0.0001")];

    srcNftMAF = "0xaC8C25a8D2e3d26795A43Cee3315B214D4a6F2Fa";
    chidsMAF = [basegoerliChainID];
    dstNftsMAF = ["0xA4AB4f1450876b849a8ab3f1eB2284046a77a4C7"];

    srcNftNoBridgeMAF = "0xf039e0C2Bb17709eCA6E1be4A80aE1705841e196";
    chidsNoBridgeMAF = [basegoerliChainID];
    dstNftsNoBridgeMAF = ["0x8239E2903B1ABAa532fd29285c9A48ACB744bE31"];

    srcNftRelics = "0xea521f8Befd103F0A462ff81b3cBc8A0ebb65987";
    chidsRelics = [basegoerliChainID];
    dstNftsRelics = ["0xc4CdC62E2D5c57A2a06aF9D5332D4bc18De1B553"];
    break;
  case "zkSyncTestnet":
    chids = [basegoerliChainID];
    txfees = [ethers.utils.parseEther("0.001")];

    srcNftMAF = "0x4d11C4B19FC2C93D2aDecb7D1C7362484B35a566";
    chidsMAF = [basegoerliChainID];
    dstNftsMAF = ["0xA4AB4f1450876b849a8ab3f1eB2284046a77a4C7"];

    srcNftNoBridgeMAF = "0x574D7A48a3f2900Aeb34B67feCC21eeD400A4230";
    chidsNoBridgeMAF = [basegoerliChainID];
    dstNftsNoBridgeMAF = ["0x8239E2903B1ABAa532fd29285c9A48ACB744bE31"];

    srcNftRelics = "0x226d9DF3Cf487aCd1B384dc180a93B6618C11102";
    chidsRelics = [basegoerliChainID];
    dstNftsRelics = ["0xc4CdC62E2D5c57A2a06aF9D5332D4bc18De1B553"];

    break;
}

async function main() {
  const bridgeProxy = await ethers.getContractAt("BridgeNFT", bridge);

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
