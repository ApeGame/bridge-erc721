import { ethers, network } from "hardhat";
import { VerifyContractEthScan, VerifyProxyEthScan } from "../common-ethscan";
import { VerifyContractBlockScout } from "../common-blockscout";
import { Sleep } from "../common";
// eslint-disable-next-line node/no-missing-import

async function main() {
  // step 1: deploy bridgeNFT
  const _factory = await ethers.getContractFactory("BridgeNFT");
  const factory = await _factory.deploy();
  await factory.deployed();
  // console.log(`deploy logic contract for BridgeNFT : ${factory.address}`);

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
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
