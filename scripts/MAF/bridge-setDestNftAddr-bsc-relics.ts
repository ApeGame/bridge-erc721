// eslint-disable-next-line node/no-missing-import
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../../config";

const { bridge } = CONTRACTS[network.name];

const apemainChainID = 16350;
const bscmainChainID = 56;
const polygonmainChainID = 137;
const polygonmainzkevmChainID = 1101;
const zksyncmainnetChainID = 324;
const lineamainChainID = 59144;
const basemainnetChainId = 8453;

let srcNft: string = "";
let chids: number[] = [];
let dstNfts: string[] = [];
if (network.name === "bscmainnet") {
  srcNft = "0xd02e2673a4A1CC7B85e86a9D37C61b87dd633b5e";
  chids = [
    apemainChainID,
    polygonmainChainID,
    polygonmainzkevmChainID,
    zksyncmainnetChainID,
    lineamainChainID,
    basemainnetChainId,
  ];
  dstNfts = [
    "0xA72b7321517A763Dd879019564406fB5fC39cfd0",
    "0xe13c50c3120eEf7731B7223905701D2cA8E68882",
    "0x0Ae14d584A55094Eb2f4Ac5B256216649947ca01",
    "0x4f14D5CcC7D9227bd9F8c373128345fEd4936C6f",
    "0x4960edA41a25C6C0feDbe8798940cB4585E36311",
    "0x2DE9EBBf50E3f57858d78b51F7fF9a790064d5A1",
  ];
} else if (network.name === "apemain") {
  srcNft = "0xA72b7321517A763Dd879019564406fB5fC39cfd0";
  chids = [bscmainChainID];
  dstNfts = ["0xd02e2673a4A1CC7B85e86a9D37C61b87dd633b5e"];
} else if (network.name === "polygonmainnetzkevm") {
  srcNft = "0x0Ae14d584A55094Eb2f4Ac5B256216649947ca01";
  chids = [bscmainChainID];
  dstNfts = ["0xd02e2673a4A1CC7B85e86a9D37C61b87dd633b5e"];
} else if (network.name === "zksyncmainnet") {
  srcNft = "0x4f14D5CcC7D9227bd9F8c373128345fEd4936C6f";
  chids = [bscmainChainID];
  dstNfts = ["0xd02e2673a4A1CC7B85e86a9D37C61b87dd633b5e"];
} else if (network.name === "lineamain") {
  srcNft = "0x4960edA41a25C6C0feDbe8798940cB4585E36311";
  chids = [bscmainChainID];
  dstNfts = ["0xd02e2673a4A1CC7B85e86a9D37C61b87dd633b5e"];
} else if (network.name === "basemainnet") {
  srcNft = "0x2DE9EBBf50E3f57858d78b51F7fF9a790064d5A1";
  chids = [bscmainChainID];
  dstNfts = ["0xd02e2673a4A1CC7B85e86a9D37C61b87dd633b5e"];
}

async function main() {
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
