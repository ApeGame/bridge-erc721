import { types, task } from "hardhat/config";
import { ints, bigNumbers } from "./common";

import { BigNumber } from "ethers";

// 1000000000000000000
// 500000000000000000
// hardhat bridge:setTxFee --network ankr --destchainids 97,80001  --destfees  1,0.5 0xc09d350573715CD441791603c4F01a59Dd832699

task("bridge:setTxFee", "set tx fee for bridge")
  .addOptionalPositionalParam("contract", "bridge contract", "", types.string)
  .addParam("destchainids", "dest chainids", "", ints)
  .addParam("destfees", "dest fees", "", bigNumbers)
  .setAction(async (taskArgs, hre) => {
    const contract: string = taskArgs.contract;
    const destchainids: number[] = taskArgs.destchainids;
    const destfees: BigNumber[] = taskArgs.destfees;

    if (!hre.ethers.utils.isAddress(contract)) {
      console.log("invalid bridge contract");
      return "";
    }
    if (destchainids.length !== destfees.length) {
      console.log("destcainids is inconsistent with destfees");
      return "";
    }

    const BridgeNFTFactory = await hre.ethers.getContractAt(
      "BridgeNFT",
      contract
    );

    const tx = await BridgeNFTFactory.setTxFee(destchainids, destfees);
    console.log(`set dest fee tx: ${tx.hash}`);

    await tx.wait();
  });
