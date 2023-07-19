// eslint-disable-next-line node/no-missing-import
import { BigNumber } from "ethers";
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../../config";

const { bridge } = CONTRACTS[network.name];

const apemainChainID = 16350;
const bscmainChainID = 56;
const polygonmainChainID = 137;
const zkSyncmainnetChainID = 324;
const polygonmainzkevmChainID = 1101;

async function main() {
  if (network.name !== "lineamainnet") {
    return;
  }

  // set tx fee
  const bridgeProxy = await ethers.getContractAt("BridgeNFT", bridge);
  let tx = await bridgeProxy.setTxFee(
    [
      apemainChainID,
      bscmainChainID,
      polygonmainChainID,
      zkSyncmainnetChainID,
      polygonmainzkevmChainID,
    ],
    [
      ethers.utils.parseEther("0.00005"),
      ethers.utils.parseEther("0.0005"),
      ethers.utils.parseEther("0.0001"),
      ethers.utils.parseEther("0.0004"),
      ethers.utils.parseEther("0.0004"),
    ]
  );
  await tx.wait();
  console.log("setTxFee for bridge complete");

  // MAF
  tx = await bridgeProxy.setDestNftAddr(
    "0xcb11b3A77F943337D920232eE13b1CEDb6C99b72",
    [
      apemainChainID,
      bscmainChainID,
      polygonmainChainID,
      zkSyncmainnetChainID,
      polygonmainzkevmChainID,
    ],
    [
      "0x2562a3C729F71825415993335d5a759A3c4c21fc",
      "0x5704075803A122Fc5afc8B60f07B84B77e065B5e",
      "0x5409A1CD58FAF6d2Ad5Abc30c4C550C9fa85C909",
      "0x78D0c876c658682a3D117a0298aB9Ed3F5D09d29",
      "0x852759BDdd5C9170E24135C76957C50A732f1d5a",
    ]
  );
  await tx.wait();
  console.log("setDestNftAddr for bridge(MAF)");

  // relics
  tx = await bridgeProxy.setDestNftAddr(
    "0x4960edA41a25C6C0feDbe8798940cB4585E36311",
    [
      apemainChainID,
      polygonmainChainID,
      zkSyncmainnetChainID,
      polygonmainzkevmChainID,
    ],
    [
      "0xA72b7321517A763Dd879019564406fB5fC39cfd0",
      "0xe13c50c3120eEf7731B7223905701D2cA8E68882",
      "0x4f14D5CcC7D9227bd9F8c373128345fEd4936C6f",
      "0x0Ae14d584A55094Eb2f4Ac5B256216649947ca01",
    ]
  );
  await tx.wait();
  console.log("setDestNftAddr for bridge(relics)");

  // no bridge MAF
  tx = await bridgeProxy.setDestNftAddr(
    "0x121eb86A536585074Ee3a124bd9a0D93dF7af5A2",
    [
      apemainChainID,
      polygonmainChainID,
      zkSyncmainnetChainID,
      polygonmainzkevmChainID,
    ],
    [
      "0xc805C32B3D9a29E54F6c01d4d0a322697BE23C64",
      "0x721e4D95b8e0A8D5d2475a945d1CB1054bB932D0",
      "0xd522d1ff2842C0446080E80d12C6a18a370beF0b",
      "0x6CF6384D05EC0c430af3aC46135D4574cCeeF97d",
    ]
  );
  await tx.wait();
  console.log("setDestNftAddr for bridge(no bridge MAF)");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
