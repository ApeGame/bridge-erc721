import { types, task } from "hardhat/config";

// hardhat bridge:setAdmin --network ankr --admin 0xd6a5914e2b8676bd8fd2fcd9c0fd1fcf1b5a9411 0xc09d350573715CD441791603c4F01a59Dd832699

task("bridge:setAdmin", "set admin for bridge")
  .addOptionalPositionalParam("contract", "bridge contract", "", types.string)
  .addParam("admin", "admin address", "", types.string)
  .addParam("auth", "Whether to grant permissions", true, types.boolean)
  .setAction(async (taskArgs, hre) => {
    const contract: string = taskArgs.contract;
    const admin: string = taskArgs.admin;
    const auth: boolean = taskArgs.auth;

    if (!hre.ethers.utils.isAddress(contract)) {
      console.log("invalid bridge contract");
      return "";
    }

    if (!hre.ethers.utils.isAddress(admin)) {
      console.log("invalid admin address");
      return "";
    }

    const BridgeNFTFactory = await hre.ethers.getContractAt(
      "BridgeNFT",
      contract
    );

    const tx = await BridgeNFTFactory.setAdmin(admin, auth);
    console.log(`set admin tx: ${tx.hash}`);

    await tx.wait();
  });
