// eslint-disable-next-line node/no-missing-import
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../../config";

const { mockerc721, bridge } = CONTRACTS[network.name];

const srcNft: string = mockerc721;
let chids: number[];
let dstNfts: string[];
if (network.name === "bsctest") {
  chids = [12077, 80001];
  dstNfts = [
    "0xA3dC8E06d41393286683A5Fc36b6D7246F73bb68",
    "0xb3c92d6d71A71Ad7289B0A2cbae19E9fAFbdD85b",
  ];
} else if (network.name === "ankr") {
  chids = [97, 80001];
  dstNfts = [
    "0x1710C34AcDF4a6758a6039187f75F627B741ee0e",
    "0xb3c92d6d71A71Ad7289B0A2cbae19E9fAFbdD85b",
  ];
} else if (network.name === "polygontest") {
  chids = [12077, 97];
  dstNfts = [
    "0xA3dC8E06d41393286683A5Fc36b6D7246F73bb68",
    "0x1710C34AcDF4a6758a6039187f75F627B741ee0e",
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
