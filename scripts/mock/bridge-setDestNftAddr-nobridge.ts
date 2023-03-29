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
  srcNft = "0x16e1b5517945Ed455CdfE91d2bE50CA293Ebb754";
  chids = [1442];
  dstNfts = ["0xf039e0C2Bb17709eCA6E1be4A80aE1705841e196"];
} else if (network.name === "polygontestzkevm") {
  srcNft = "0xf039e0C2Bb17709eCA6E1be4A80aE1705841e196";
  chids = [12077];
  dstNfts = ["0x16e1b5517945Ed455CdfE91d2bE50CA293Ebb754"];
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
