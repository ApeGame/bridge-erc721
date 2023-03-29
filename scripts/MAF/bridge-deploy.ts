import { ethers, network } from "hardhat";
import {
  VerifyContractEthScan,
  VerifyProxyEthScan,
} from "../common-ethscan";
import { VerifyContractBlockScout } from "../common-blockscout";
import { Sleep } from "../common"
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../../config";

const { owner, proxyAdmin } = CONTRACTS[network.name];

async function main() {
  const nonce = await ethers.provider.getTransactionCount(owner);
  // step 1: deploy bridgeNFT
  const _factory = await ethers.getContractFactory("BridgeNFT");
  const factory = await _factory.deploy({ nonce: nonce });
  await factory.deployed();
  // console.log(`deploy logic contract for BridgeNFT : ${factory.address}`);

  const _bridgeProxy = await ethers.getContractFactory(
    "AdminUpgradeabilityProxy"
  );
  const bridgeProxy = await _bridgeProxy.deploy(
    factory.address,
    proxyAdmin,
    factory.interface.encodeFunctionData("initialize"),
    { nonce: nonce + 1 }
  );
  await bridgeProxy.deployed();
  console.log(`Bridge address: ${bridgeProxy.address}`);

  const bridge = await ethers.getContractAt("BridgeNFT", bridgeProxy.address);
  const tx = await bridge.setBridgeGas(300000, 50000, 200000, {
    nonce: nonce + 2,
  });
  await tx.wait();
  console.log(`setBridgeGas complete`);

  // sleep 10s
  await Sleep(10000);

  if (network.name === "bscmainnet") {
    console.log(
      `bridgeNFT logic contract(${
        factory.address
      }) verify & push contract, guid: ${await VerifyContractEthScan(
        factory.address,
        "contracts/bridgeNft.sol:BridgeNFT",
        "",
        "https://api.bscscan.com/api",
        "Z86V9AC619GAGEYVWBP86CTGDDPSS4JS8R"
      )}`
    );
    await VerifyProxyEthScan(
      factory.address,
      bridgeProxy.address,
      "https://api.bscscan.com/api",
      "Z86V9AC619GAGEYVWBP86CTGDDPSS4JS8R"
    );
  } else if (network.name === "apemain") {
    console.log(
      `bridgeNFT logic contract(${
        factory.address
      }) verify & push contract, guid: ${await VerifyContractBlockScout(
        factory.address,
        "contracts/bridgeNft.sol:BridgeNFT",
        "",
        "https://explorer.bas.metaapesgame.com/api"
      )}`
    );
  } else if (network.name === "polygonmainnetzkevm") {
    console.log(
      `bridgeNFT logic contract(${
        factory.address
      }) verify & push contract, guid: ${await VerifyContractEthScan(
        factory.address,
        "contracts/bridgeNft.sol:BridgeNFT",
        "",
        "https://api-zkevm.polygonscan.com/api",
        "QADPA8U7I9EU4K1I672Y9QHRAY7PFJ5WAX"
      )}`
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
