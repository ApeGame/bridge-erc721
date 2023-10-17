import { types, task } from "hardhat/config";

// hardhat bridge:setPayee --network ankr --payee 0x20cD8eB93c50BDAc35d6A526f499c0104958e3F6 0xc09d350573715CD441791603c4F01a59Dd832699

task("bridge:setPayee", "set payee for bridge")
  .addOptionalPositionalParam("contract", "bridge contract", "", types.string)
  .addParam("payee", "payee address", "", types.string)
  .setAction(async (taskArgs, hre) => {
    const contract: string = taskArgs.contract;
    const payee: string = taskArgs.payee;

    if (!hre.ethers.utils.isAddress(contract)) {
      console.log("invalid bridge contract");
      return "";
    }

    if (!hre.ethers.utils.isAddress(payee)) {
      console.log("invalid payee address");
      return "";
    }

    const BridgeNFTFactory = await hre.ethers.getContractAt(
      "BridgeNFT",
      contract
    );

    const tx = await BridgeNFTFactory.setPayee(payee);
    console.log(`set payee tx: ${tx.hash}`);

    await tx.wait();
  });
