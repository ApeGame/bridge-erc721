// eslint-disable-next-line node/no-missing-import
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { mockerc721, bridge } = CONTRACTS[network.name];

const srcNft: string = mockerc721;
let chids: number[];
let dstNfts: string[];
if (network.name === "bscmainnet") {
  chids = [137, 16350];
  dstNfts = [
    "0x2529Bc7cFfedb3a82f2b6d904d8B03F052dF766b",
    "0xaaeb64F976B4b5e6D0Adf08e285486ec42d7538b",
    "0x5cc3847389431B2d4CBAAE6489Ac1473F877e966",
    "0x2897153fB614E00d2C3Ab1230c0B843260E0eca9",
  ];
} else if (network.name === "basmainnet") {
  chids = [56, 137];
  dstNfts = [
    "0xaaeb64F976B4b5e6D0Adf08e285486ec42d7538b",
    "0x079EB6Fb04F9C480D698a025a8EAa0222C05D01A",
    "0x5cc3847389431B2d4CBAAE6489Ac1473F877e966",
    "0x2897153fB614E00d2C3Ab1230c0B843260E0eca9",
  ];
} else if (network.name === "polygonmainnet") {
  chids = [56, 16350];
  dstNfts = [
    "0x2529Bc7cFfedb3a82f2b6d904d8B03F052dF766b",
    "0x079EB6Fb04F9C480D698a025a8EAa0222C05D01A",
    "0x5cc3847389431B2d4CBAAE6489Ac1473F877e966",
    "0x2897153fB614E00d2C3Ab1230c0B843260E0eca9",
  ];
} else if (network.name === "localhost") {
  chids = [1307];
  dstNfts = [mockerc721];
} else if (network.name === "bsctest") {
  chids = [12077];
  dstNfts = ["0xA3dC8E06d41393286683A5Fc36b6D7246F73bb68"];
} else if (network.name === "ankr") {
  chids = [97];
  dstNfts = ["0x1710C34AcDF4a6758a6039187f75F627B741ee0e"];
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
