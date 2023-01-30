// eslint-disable-next-line node/no-missing-import
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";

const { bridge, mockerc721 } = CONTRACTS[network.name];

async function main() {
  const bridgeProxy = await ethers.getContractAt("BridgeNFT", bridge);
  let bridgeMintGas = await bridgeProxy.bridgeMintGas();
  let ownerOfGas = await bridgeProxy.ownerOfGas();
  let transferFromGas = await bridgeProxy.transferFromGas();

  console.log(`
  bridgeMintGas:   ${bridgeMintGas};
  ownerOfGas:      ${ownerOfGas};
  transferFromGas: ${transferFromGas};
  `);

  const tx = await bridgeProxy.setBridgeGas(300000, 50000, 200000);
  await tx.wait();
  console.log(`setBridgeGas complete`);

  bridgeMintGas = await bridgeProxy.bridgeMintGas();
  ownerOfGas = await bridgeProxy.ownerOfGas();
  transferFromGas = await bridgeProxy.transferFromGas();

  console.log(`
  bridgeMintGas:   ${bridgeMintGas};
  ownerOfGas:      ${ownerOfGas};
  transferFromGas: ${transferFromGas};
  `);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
