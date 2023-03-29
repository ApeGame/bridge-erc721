// eslint-disable-next-line node/no-missing-import
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../../config";

const { bridge } = CONTRACTS[network.name];

// const srcNft: string = mockerc721;
let srcNft: string;
let chids: number[];
let dstNfts: string[];
if (network.name === "bsctest") {
  srcNft = "0x6Be6B9b8FA71D150Ca7e3A6431FdA868a099A288";
  chids = [12077, 80001, 1442];
  dstNfts = [
    "0x866df3e1b203cc3bf50eb4f707d29ce5b665d4d1",
    "0x3c9bEc762e3C78357B7300701aBaF1d8cDC9678c",
    "0xaC8C25a8D2e3d26795A43Cee3315B214D4a6F2Fa",
  ];
} else if (network.name === "ankr") {
  srcNft = "0x866df3e1b203cc3bf50eb4f707d29ce5b665d4d1";
  chids = [97, 80001, 1442];
  dstNfts = [
    "0x6Be6B9b8FA71D150Ca7e3A6431FdA868a099A288",
    "0x3c9bEc762e3C78357B7300701aBaF1d8cDC9678c",
    "0xaC8C25a8D2e3d26795A43Cee3315B214D4a6F2Fa",
  ];
} else if (network.name === "polygontest") {
  srcNft = "0x3c9bEc762e3C78357B7300701aBaF1d8cDC9678c";
  chids = [97, 12077, 1442];
  dstNfts = [
    "0x6Be6B9b8FA71D150Ca7e3A6431FdA868a099A288",
    "0x866df3e1b203cc3bf50eb4f707d29ce5b665d4d1",
    "0xaC8C25a8D2e3d26795A43Cee3315B214D4a6F2Fa",
  ];
} else if (network.name === "polygontestzkevm") {
  srcNft = "0xaC8C25a8D2e3d26795A43Cee3315B214D4a6F2Fa";
  chids = [97, 12077, 80001];
  dstNfts = [
    "0x6Be6B9b8FA71D150Ca7e3A6431FdA868a099A288",
    "0x866df3e1b203cc3bf50eb4f707d29ce5b665d4d1",
    "0x3c9bEc762e3C78357B7300701aBaF1d8cDC9678c",
  ];
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
