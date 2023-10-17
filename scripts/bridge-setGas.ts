import { SetBridgeGasEvent } from "./../typechain/BridgeNFT.d";
import { types, task } from "hardhat/config";

// hardhat bridge:setGas --network ankr --bridgemintgas 300000 --ownerofgas 50000 --transferfromgas 200000 0xc09d350573715CD441791603c4F01a59Dd832699

task("bridge:setGas", "set gas for bridge")
  .addOptionalPositionalParam("contract", "bridge contract", "", types.string)
  .addParam("bridgemintgas", "gas for bridge mint", "", types.int)
  .addParam("ownerofgas", "gas for ownerOf", "", types.int)
  .addParam("transferfromgas", "gas for transferFrom", "", types.int)
  .setAction(async (taskArgs, hre) => {
    const contract: string = taskArgs.contract;
    const bridgeMintGas: number = taskArgs.bridgemintgas;
    const ownerOfGas: number = taskArgs.ownerofgas;
    const transferFromGas: number = taskArgs.transferfromgas;

    if (!hre.ethers.utils.isAddress(contract)) {
      console.log("invalid bridge contract");
      return "";
    }

    const BridgeNFTFactory = await hre.ethers.getContractAt(
      "BridgeNFT",
      contract
    );

    const tx = await BridgeNFTFactory.setBridgeGas(
      bridgeMintGas,
      ownerOfGas,
      transferFromGas
    );
    console.log(`set gas tx: ${tx.hash}`);

    await tx.wait();
  });
