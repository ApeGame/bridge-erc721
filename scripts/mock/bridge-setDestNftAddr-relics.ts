// eslint-disable-next-line node/no-missing-import
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../../config";

const { bridge } = CONTRACTS[network.name];

// const srcNft: string = mockerc721;
let srcNft: string;
let chids: number[];
let dstNfts: string[];
if (network.name === "ankr") {
  srcNft = "0x41ecfB27845912A952A1774971d6F9D95C84c370";
  chids = [1442];
  dstNfts = ["0xea521f8Befd103F0A462ff81b3cBc8A0ebb65987"];
} else if (network.name === "polygontestzkevm") {
  srcNft = "0xea521f8Befd103F0A462ff81b3cBc8A0ebb65987";
  chids = [80001, 12077];
  dstNfts = [
    "0x77E825be7701Fe49D4b825304C77B3754f80D54d",
    "0x41ecfB27845912A952A1774971d6F9D95C84c370",
  ];
} else if (network.name === "polygontest") {
  srcNft = "0x77E825be7701Fe49D4b825304C77B3754f80D54d";
  chids = [1442];
  dstNfts = ["0xea521f8Befd103F0A462ff81b3cBc8A0ebb65987"];
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
