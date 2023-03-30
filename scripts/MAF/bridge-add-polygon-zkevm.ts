// eslint-disable-next-line node/no-missing-import
import { BigNumber } from "ethers";
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../../config";

const { bridge } = CONTRACTS[network.name];

const chids: number[] = [16350, 137, 56];
const txfees: BigNumber[] = [
  ethers.utils.parseEther("0.0001"),
  ethers.utils.parseEther("0.0001"),
  ethers.utils.parseEther("0.0005"),
];

async function main() {
  if (network.name !== "polygonmainnetzkevm") {
    return;
  }

  // set tx fee
  const bridgeProxy = await ethers.getContractAt("BridgeNFT", bridge);
  if (chids.length > 0 && chids.length === txfees.length) {
    const tx = await bridgeProxy.setTxFee(chids, txfees);
    await tx.wait();
    console.log("setTxFee for bridge complete");
  }

  // set admin
  let tx = await bridgeProxy.setAdmin(
    "0x5767A8EdE4d14595162920C4019a5e79D685FF67",
    true
  );
  await tx.wait();

  // MAF
  tx = await bridgeProxy.setDestNftAddr(
    "0x852759BDdd5C9170E24135C76957C50A732f1d5a",
    [16350, 137, 56],
    [
      "0x2562a3C729F71825415993335d5a759A3c4c21fc",
      "0x5409A1CD58FAF6d2Ad5Abc30c4C550C9fa85C909",
      "0x5704075803A122Fc5afc8B60f07B84B77e065B5e",
    ]
  );
  await tx.wait();
  console.log("setDestNftAddr for bridge(MAF)");

  // relics
  tx = await bridgeProxy.setDestNftAddr(
    "0x0Ae14d584A55094Eb2f4Ac5B256216649947ca01",
    [137],
    ["0xe13c50c3120eEf7731B7223905701D2cA8E68882"]
  );
  await tx.wait();
  console.log("setDestNftAddr for bridge(relics)");

  // no bridge MAF
  tx = await bridgeProxy.setDestNftAddr(
    "0x6CF6384D05EC0c430af3aC46135D4574cCeeF97d",
    [16350, 137],
    [
      "0xc805C32B3D9a29E54F6c01d4d0a322697BE23C64",
      "0x721e4D95b8e0A8D5d2475a945d1CB1054bB932D0",
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
