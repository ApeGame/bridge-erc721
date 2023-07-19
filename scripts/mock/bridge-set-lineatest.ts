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

switch (network.name) {
  case "lineatest":
    chids = [
      coqtestChainID,
      bsctestChainID,
      polygontestChainID,
      zkSyncTestnetChainID,
      polygontestzkevmChainID,
    ];
    txfees = [
      ethers.utils.parseEther("0.01"),
      ethers.utils.parseEther("0.05"),
      ethers.utils.parseEther("0.0001"),
      ethers.utils.parseEther("0.0001"),
      ethers.utils.parseEther("0.0001"),
    ];
    srcNftMAF = "0x84868afcC4Ba758a4ae2aca141D2fF0ECD8C5fac";
    chidsMAF = [
      coqtestChainID,
      bsctestChainID,
      polygontestChainID,
      zkSyncTestnetChainID,
      polygontestzkevmChainID,
    ];
    dstNftsMAF = [
      "0x866df3e1b203cc3bf50eb4f707d29ce5b665d4d1",
      "0x6Be6B9b8FA71D150Ca7e3A6431FdA868a099A288",
      "0x3c9bEc762e3C78357B7300701aBaF1d8cDC9678c",
      "0x4d11C4B19FC2C93D2aDecb7D1C7362484B35a566",
      "0xaC8C25a8D2e3d26795A43Cee3315B214D4a6F2Fa",
    ];

    srcNftNoBridgeMAF = "0xBedb5e825989B8ef4B195bfC3A9196eEC35Beae4";
    chidsNoBridgeMAF = [
      coqtestChainID,
      polygontestzkevmChainID,
      zkSyncTestnetChainID,
    ];
    dstNftsNoBridgeMAF = [
      "0x16e1b5517945Ed455CdfE91d2bE50CA293Ebb754",
      "0xf039e0C2Bb17709eCA6E1be4A80aE1705841e196",
      "0x574D7A48a3f2900Aeb34B67feCC21eeD400A4230",
    ];

    srcNftRelics = "0x6dce96014708eEC5fa697770841be06BFCc5A3ef";
    chidsRelics = [
      coqtestChainID,
      polygontestChainID,
      polygontestzkevmChainID,
      zkSyncTestnetChainID,
    ];
    dstNftsRelics = [
      "0x41ecfB27845912A952A1774971d6F9D95C84c370",
      "0x77E825be7701Fe49D4b825304C77B3754f80D54d",
      "0xea521f8Befd103F0A462ff81b3cBc8A0ebb65987",
      "0x226d9DF3Cf487aCd1B384dc180a93B6618C11102",
    ];
    break;

  case "ankr":
    chids = [lineatestChainID];
    txfees = [ethers.utils.parseEther("1")];

    srcNftMAF = "0x866df3e1b203cc3bf50eb4f707d29ce5b665d4d1";
    chidsMAF = [lineatestChainID];
    dstNftsMAF = ["0x84868afcC4Ba758a4ae2aca141D2fF0ECD8C5fac"];

    srcNftNoBridgeMAF = "0x16e1b5517945Ed455CdfE91d2bE50CA293Ebb754";
    chidsNoBridgeMAF = [lineatestChainID];
    dstNftsNoBridgeMAF = ["0xBedb5e825989B8ef4B195bfC3A9196eEC35Beae4"];

    srcNftRelics = "0x41ecfB27845912A952A1774971d6F9D95C84c370";
    chidsRelics = [lineatestChainID];
    dstNftsRelics = ["0x6dce96014708eEC5fa697770841be06BFCc5A3ef"];
    break;
  case "bsctest":
    chids = [lineatestChainID];
    txfees = [ethers.utils.parseEther("0.01")];

    srcNftMAF = "0x6Be6B9b8FA71D150Ca7e3A6431FdA868a099A288";
    chidsMAF = [lineatestChainID];
    dstNftsMAF = ["0x84868afcC4Ba758a4ae2aca141D2fF0ECD8C5fac"];
    break;
  case "polygontest":
    chids = [lineatestChainID];
    txfees = [ethers.utils.parseEther("0.05")];

    srcNftMAF = "0x3c9bEc762e3C78357B7300701aBaF1d8cDC9678c";
    chidsMAF = [lineatestChainID];
    dstNftsMAF = ["0x84868afcC4Ba758a4ae2aca141D2fF0ECD8C5fac"];

    srcNftRelics = "0x77E825be7701Fe49D4b825304C77B3754f80D54d";
    chidsRelics = [lineatestChainID];
    dstNftsRelics = ["0x6dce96014708eEC5fa697770841be06BFCc5A3ef"];
    break;
  case "polygontestzkevm":
    chids = [lineatestChainID];
    txfees = [ethers.utils.parseEther("0.0001")];

    srcNftMAF = "0xaC8C25a8D2e3d26795A43Cee3315B214D4a6F2Fa";
    chidsMAF = [lineatestChainID];
    dstNftsMAF = ["0x84868afcC4Ba758a4ae2aca141D2fF0ECD8C5fac"];

    srcNftNoBridgeMAF = "0xf039e0C2Bb17709eCA6E1be4A80aE1705841e196";
    chidsNoBridgeMAF = [lineatestChainID];
    dstNftsNoBridgeMAF = ["0xBedb5e825989B8ef4B195bfC3A9196eEC35Beae4"];

    srcNftRelics = "0xea521f8Befd103F0A462ff81b3cBc8A0ebb65987";
    chidsRelics = [lineatestChainID];
    dstNftsRelics = ["0x6dce96014708eEC5fa697770841be06BFCc5A3ef"];
    break;
  case "zkSyncTestnet":
    chids = [lineatestChainID];
    txfees = [ethers.utils.parseEther("0.001")];

    srcNftMAF = "0x4d11C4B19FC2C93D2aDecb7D1C7362484B35a566";
    chidsMAF = [lineatestChainID];
    dstNftsMAF = ["0x84868afcC4Ba758a4ae2aca141D2fF0ECD8C5fac"];

    srcNftNoBridgeMAF = "0x574D7A48a3f2900Aeb34B67feCC21eeD400A4230";
    chidsNoBridgeMAF = [lineatestChainID];
    dstNftsNoBridgeMAF = ["0xBedb5e825989B8ef4B195bfC3A9196eEC35Beae4"];

    srcNftRelics = "0x226d9DF3Cf487aCd1B384dc180a93B6618C11102";
    chidsRelics = [lineatestChainID];
    dstNftsRelics = ["0x6dce96014708eEC5fa697770841be06BFCc5A3ef"];

    // cast send --private-key <private-key> --rpc-url https://testnet.era.zksync.dev 0x6680FC6932f2a1aDccF0f6d3Ae2EBEfFD2A56757 "setTxFee(uint256[],uint256[])" "[59140]" "[1000000000000000]"
    // cast send --private-key <private-key> --rpc-url https://testnet.era.zksync.dev 0x6680FC6932f2a1aDccF0f6d3Ae2EBEfFD2A56757 "setDestNftAddr(address,uint256[],address[])" "0x4d11C4B19FC2C93D2aDecb7D1C7362484B35a566" "[59140]" "[0x84868afcC4Ba758a4ae2aca141D2fF0ECD8C5fac]"
    // cast send --private-key <private-key> --rpc-url https://testnet.era.zksync.dev 0x6680FC6932f2a1aDccF0f6d3Ae2EBEfFD2A56757 "setDestNftAddr(address,uint256[],address[])" "0x574D7A48a3f2900Aeb34B67feCC21eeD400A4230" "[59140]" "[0xBedb5e825989B8ef4B195bfC3A9196eEC35Beae4]"
    // cast send --private-key <private-key> --rpc-url https://testnet.era.zksync.dev 0x6680FC6932f2a1aDccF0f6d3Ae2EBEfFD2A56757 "setDestNftAddr(address,uint256[],address[])" "0x226d9DF3Cf487aCd1B384dc180a93B6618C11102" "[59140]" "[0x6dce96014708eEC5fa697770841be06BFCc5A3ef]"

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
