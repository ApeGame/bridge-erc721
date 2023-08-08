// eslint-disable-next-line node/no-missing-import
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../../config";

const { bridge } = CONTRACTS[network.name];

const coqtestChainID = 12077;
const bsctestChainID = 97;
const polygontestChainID = 80001;
const zksynctestChainID = 280;
const polygontestzkevmChainID = 1442;
const lineatestChainID = 59140;
const basetestChainId = 84531;

let srcNft: string = "";
let chids: number[] = [];
let dstNfts: string[] = [];
if (network.name === "bsctest") {
  srcNft = "0xDB333aFd314231B378b4505961509372a2DBcaaD";
  chids = [
    coqtestChainID,
    polygontestChainID,
    polygontestzkevmChainID,
    zksynctestChainID,
    lineatestChainID,
    basetestChainId,
  ];
  dstNfts = [
    "0x41ecfB27845912A952A1774971d6F9D95C84c370",
    "0x77E825be7701Fe49D4b825304C77B3754f80D54d",
    "0xea521f8Befd103F0A462ff81b3cBc8A0ebb65987",
    "0x226d9DF3Cf487aCd1B384dc180a93B6618C11102",
    "0x6dce96014708eEC5fa697770841be06BFCc5A3ef",
    "0xc4CdC62E2D5c57A2a06aF9D5332D4bc18De1B553",
  ];
} else if (network.name === "ankr") {
  srcNft = "0x41ecfB27845912A952A1774971d6F9D95C84c370";
  chids = [bsctestChainID];
  dstNfts = ["0xDB333aFd314231B378b4505961509372a2DBcaaD"];
} else if (network.name === "polygontest") {
  srcNft = "0x77E825be7701Fe49D4b825304C77B3754f80D54d";
  chids = [bsctestChainID];
  dstNfts = ["0xDB333aFd314231B378b4505961509372a2DBcaaD"];
} else if (network.name === "polygontestzkevm") {
  srcNft = "0xea521f8Befd103F0A462ff81b3cBc8A0ebb65987";
  chids = [bsctestChainID];
  dstNfts = ["0xDB333aFd314231B378b4505961509372a2DBcaaD"];
} else if (network.name === "zksynctestnet") {
  srcNft = "0x226d9DF3Cf487aCd1B384dc180a93B6618C11102";
  chids = [bsctestChainID];
  dstNfts = ["0xDB333aFd314231B378b4505961509372a2DBcaaD"];
} else if (network.name === "lineatest") {
  srcNft = "0x6dce96014708eEC5fa697770841be06BFCc5A3ef";
  chids = [bsctestChainID];
  dstNfts = ["0xDB333aFd314231B378b4505961509372a2DBcaaD"];
} else if (network.name === "basegoerli") {
  srcNft = "0xc4CdC62E2D5c57A2a06aF9D5332D4bc18De1B553";
  chids = [bsctestChainID];
  dstNfts = ["0xDB333aFd314231B378b4505961509372a2DBcaaD"];
}

async function main() {
  // 2 setDestNftAddr for bridge
  const bridgeProxy = await ethers.getContractAt("BridgeNFT", bridge);
  if (chids.length !== 0) {
    const tx = await bridgeProxy.setDestNftAddr(srcNft, chids, dstNfts);
    await tx.wait();
    console.log("setDestNftAddr for bridge");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
