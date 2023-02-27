// eslint-disable-next-line node/no-missing-import
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../../config";

const { bridge } = CONTRACTS[network.name];

let srcNft: string;
let chids: number[];
let dstNfts: string[];
if (network.name === "bscmainnet") {
  srcNft = "0x5704075803A122Fc5afc8B60f07B84B77e065B5e";
  chids = [16350, 137];
  dstNfts = [
    "0x2562a3C729F71825415993335d5a759A3c4c21fc",
    "0x5409A1CD58FAF6d2Ad5Abc30c4C550C9fa85C909",
  ];
} else if (network.name === "apemain") {
  srcNft = "0x2562a3C729F71825415993335d5a759A3c4c21fc";
  chids = [56, 137];
  dstNfts = [
    "0x5704075803A122Fc5afc8B60f07B84B77e065B5e",
    "0x5409A1CD58FAF6d2Ad5Abc30c4C550C9fa85C909",
  ];
} else if (network.name === "polygonmainnet") {
  srcNft = "0x5409A1CD58FAF6d2Ad5Abc30c4C550C9fa85C909";
  chids = [16350, 56];
  dstNfts = [
    "0x2562a3C729F71825415993335d5a759A3c4c21fc",
    "0x5704075803A122Fc5afc8B60f07B84B77e065B5e",
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
