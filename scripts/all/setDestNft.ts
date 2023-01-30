import { Wallet } from "ethers";
import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { ALLCHAIN } from "./config";

const { ape, edge, polygon, bsc, ownerPrivate } = ALLCHAIN;

let apeChainId: number;
let edgeChainId: number;
let polygonChainId: number;
let bscChainId: number;

const apeBridge: string = "";
const edgeBridge: string = "";
const polygonBridge: string = "";
const bscBridge: string = "";

const apeNftAddr: string = "";
const edgeNftAddr: string = "";
const polygonNftAddr: string = "";
const bscNftAddr: string = "";
async function main() {
  await getChainId();
  setDestNft(
    ape,
    apeBridge,
    apeNftAddr,
    [edgeChainId, polygonChainId, bscChainId],
    [edgeNftAddr, polygonNftAddr, bscNftAddr]
  );

  setDestNft(
    edge,
    edgeBridge,
    edgeNftAddr,
    [apeChainId, polygonChainId, bscChainId],
    [apeNftAddr, polygonNftAddr, bscNftAddr]
  );

  setDestNft(
    polygon,
    polygonBridge,
    polygonNftAddr,
    [apeChainId, edgeChainId, bscChainId],
    [apeNftAddr, edgeNftAddr, bscNftAddr]
  );

  setDestNft(
    bsc,
    bscBridge,
    bscNftAddr,
    [apeChainId, edgeChainId, polygonChainId],
    [apeNftAddr, edgeNftAddr, polygonNftAddr]
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});

async function getChainId() {
  apeChainId = (
    await new ethers.providers.JsonRpcProvider(ape, "any").getNetwork()
  ).chainId;

  edgeChainId = (
    await new ethers.providers.JsonRpcProvider(edge, "any").getNetwork()
  ).chainId;

  polygonChainId = (
    await new ethers.providers.JsonRpcProvider(polygon).getNetwork()
  ).chainId;

  bscChainId = (await new ethers.providers.JsonRpcProvider(bsc).getNetwork())
    .chainId;
}

async function setDestNft(
  uri: string,
  bridgeAddr: string,
  scrNftAddr: string,
  destChainIds: number[],
  destNftAddrs: string[]
) {
  const provider = new ethers.providers.JsonRpcProvider(uri, "any");
  const ownWallet = new Wallet(ownerPrivate, provider);
  const bridge = await ethers.getContractAt("BridgeNFT", bridgeAddr, ownWallet);

  const tx = await bridge.setDestNftAddr(
    scrNftAddr,
    destChainIds,
    destNftAddrs
  );
  await tx.wait();
}
