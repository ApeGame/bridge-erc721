import { Wallet } from "ethers";
import { ethers } from "hardhat";
import Web3 from "web3";
// eslint-disable-next-line node/no-missing-import
import { ALLCHAIN } from "./config";

const {
  ape,
  edge,
  polygon,
  bsc,
  ownerPrivate,
  proxyAdminPrivate,
  bridgeAdmin,
} = ALLCHAIN;

let apeBridge: string;
let edgeBridge: string;
let polygonBridge: string;
let bscBridge: string;

async function main() {
  // deploy
  apeBridge = await deployBridge(ape, ownerPrivate, proxyAdminPrivate);
  edgeBridge = await deployBridge(edge, ownerPrivate, proxyAdminPrivate);
  polygonBridge = await deployBridge(polygon, ownerPrivate, proxyAdminPrivate);
  bscBridge = await deployBridge(bsc, ownerPrivate, proxyAdminPrivate);

  console.log(`deploy bridgeNFT for ape:     ${apeBridge}`);
  console.log(`deploy bridgeNFT for edge:    ${edgeBridge}`);
  console.log(`deploy bridgeNFT for polygon: ${polygonBridge}`);
  console.log(`deploy bridgeNFT for bsc:     ${bscBridge}`);

  // setFee
  setFee();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});

async function deployBridge(
  uri: string,
  ownPrivate: string,
  adminPrivate: string
): Promise<string> {
  const provider = new ethers.providers.JsonRpcProvider(uri, "any");
  const ownWallet = new Wallet(ownPrivate, provider);
  const adminWallet = new Wallet(adminPrivate, provider);
  const nonce = await provider.getTransactionCount(ownWallet.address);

  // step 1: deploy bridgeNFT
  const _factory = await ethers.getContractFactory("BridgeNFT");
  const factory = await _factory
    .connect(ownWallet)
    .deploy({ nonce: nonce, gasLimit: 3000000 });
  await factory.deployed();
  console.log(`deploy logic contract for BridgeNFT : ${factory.address}`);

  // step 2: proxy deploy
  const _bridgeProxy = await ethers.getContractFactory(
    "AdminUpgradeabilityProxy"
  );
  const bridgeProxy = await _bridgeProxy
    .connect(ownWallet)
    .deploy(
      factory.address,
      adminWallet.address,
      factory.interface.encodeFunctionData("initialize"),
      { nonce: nonce + 1, gasLimit: 3000000 }
    );

  await bridgeProxy.deployed();
  console.log(`Bridge address: ${bridgeProxy.address}`);

  // step 3: set bridgeGas
  const bridge = await ethers.getContractAt("BridgeNFT", bridgeProxy.address);
  let tx = await bridge.connect(ownWallet).setBridgeGas(300000, 50000, 200000, {
    nonce: nonce + 2,
    gasLimit: 3000000,
  });
  await tx.wait();
  console.log(`setBridgeGas complete`);

  // set admin
  tx = await bridge
    .connect(ownWallet)
    .setAdmin(bridgeAdmin, true, { nonce: nonce + 3, gasLimit: 3000000 });
  await tx.wait();
  console.log(`setAdmin complete`);

  // set Payee
  // tx = await bridge
  //   .connect(ownWallet)
  //   .setPayee(ownWallet.address, { nonce: nonce + 4, gasLimit: 3000000 });
  // await tx.wait();
  // console.log(`setPayee complete`);

  return bridge.address;
}

async function setFee() {
  const apeProvider = new ethers.providers.JsonRpcProvider(ape, "any");
  const edgeProvider = new ethers.providers.JsonRpcProvider(edge, "any");
  const polygonProvider = new ethers.providers.JsonRpcProvider(polygon);
  const bscProvider = new ethers.providers.JsonRpcProvider(bsc);

  const apeChainId = await apeProvider.getNetwork();
  const edgeChainId = await edgeProvider.getNetwork();
  const polygonChainId = await polygonProvider.getNetwork();
  const bscChainId = await bscProvider.getNetwork();

  console.log(`ape chainId: ${apeChainId.chainId}`);
  console.log(`edge chainId: ${edgeChainId.chainId}`);
  console.log(`polygon chainId: ${polygonChainId.chainId}`);
  console.log(`bsc chainId: ${bscChainId.chainId}`);

  // set tx fee for bsc
  const bscBridgeContract = await ethers.getContractAt(
    "BridgeNFT",
    bscBridge,
    new Wallet(ownerPrivate, bscProvider)
  );
  let tx = await bscBridgeContract.setTxFee(
    [polygonChainId.chainId, apeChainId.chainId, edgeChainId.chainId],
    [
      ethers.utils.parseEther("0.0002"),
      ethers.utils.parseEther("0.002"),
      ethers.utils.parseEther("0.0002"),
    ]
  );
  await tx.wait();
  console.log(`bsc setTxfee complete`);

  // set tx fee for polygon
  const polygonBridgeContract = await ethers.getContractAt(
    "BridgeNFT",
    polygonBridge,
    new Wallet(ownerPrivate, polygonProvider)
  );
  tx = await polygonBridgeContract.setTxFee(
    [bscChainId.chainId, apeChainId.chainId, edgeChainId.chainId],
    [
      ethers.utils.parseEther("2"),
      ethers.utils.parseEther("2"),
      ethers.utils.parseEther("0.05"),
    ]
  );
  await tx.wait();
  console.log(`polygon setTxfee complete`);
}
