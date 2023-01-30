import { Wallet } from "ethers";
import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { ALLCHAIN } from "./config";

const { ape, edge, polygon, bsc, ownerPrivate } = ALLCHAIN;

const apeBridge: string = "";
const edgeBridge: string = "";
const polygonBridge: string = "";
const bscBridge: string = "";

async function main() {
  // deploy
  const apeMockNft = await deployMock(ape, apeBridge);
  const edgeMockNft = await deployMock(edge, edgeBridge);
  const polygonMockNft = await deployMock(polygon, polygonBridge);
  const bscMockNft = await deployMock(bsc, bscBridge);

  console.log(`deploy mock nft for ape: ${apeMockNft}`);
  console.log(`deploy mock nft for ape: ${edgeMockNft}`);
  console.log(`deploy mock nft for ape: ${polygonMockNft}`);
  console.log(`deploy mock nft for ape: ${bscMockNft}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});

async function deployMock(uri: string, bridge: string): Promise<string> {
  const provider = new ethers.providers.JsonRpcProvider(uri, "any");
  const ownWallet = new Wallet(ownerPrivate, provider);
  const nonce = await provider.getTransactionCount(ownWallet.address);

  // step 1: deploy mock NFT
  const _nft = await ethers.getContractFactory("MyNFT");
  const nft = await _nft
    .connect(ownWallet)
    .deploy("aaa", "bbb", { nonce: nonce });
  console.log(`MyNFT address: ${nft.address}`);

  // set bridge
  const tx = await nft
    .connect(ownWallet)
    .setBridge(bridge, true, { nonce: nonce + 1 });
  await tx.wait();
  console.log("set bridge complete");

  return nft.address;
}
