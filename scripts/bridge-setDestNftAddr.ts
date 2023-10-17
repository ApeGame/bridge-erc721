import { types, task } from "hardhat/config";
import { addresses, ints } from "./common";

// hardhat bridge:setDestNftAddr --network ankr --srcnft 0x866df3e1b203cc3bf50eb4f707d29ce5b665d4d1 --destchainids 97,80001  --destnfts 0x6Be6B9b8FA71D150Ca7e3A6431FdA868a099A288,0x3c9bEc762e3C78357B7300701aBaF1d8cDC9678c 0xc09d350573715CD441791603c4F01a59Dd832699

task("bridge:setDestNftAddr", "set dest nft for bridge")
  .addOptionalPositionalParam("contract", "bridge contract", "", types.string)
  .addParam("srcnft", "src nft", "", types.string)
  .addParam("destchainids", "dest chain ids", "", ints)
  .addParam("destnfts", "", "dest nfts", addresses)
  .setAction(async (taskArgs, hre) => {
    const contract: string = taskArgs.contract;
    const srcnft: string = taskArgs.srcnft;
    const destchainids: number[] = taskArgs.destchainids;
    const destnfts: string[] = taskArgs.destnfts;

    if (!hre.ethers.utils.isAddress(contract)) {
      console.log("invalid bridge contract");
      return "";
    }
    if (destchainids.length !== destnfts.length) {
      console.log("destcainids is inconsistent with destnfts");
      return "";
    }

    const BridgeNFTFactory = await hre.ethers.getContractAt(
      "BridgeNFT",
      contract
    );

    const tx = await BridgeNFTFactory.setDestNftAddr(
      srcnft,
      destchainids,
      destnfts
    );
    console.log(`set dest nft tx: ${tx.hash}`);

    await tx.wait();
  });
