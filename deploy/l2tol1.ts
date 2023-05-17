import { Wallet, Provider, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { CONTRACTS } from "../config";

export default async function (hre: HardhatRuntimeEnvironment) {
  const { ownerPrivate } = CONTRACTS[hre.network.name];

  const zkSyncProvider = new Provider("https://testnet.era.zksync.dev/");
  const ethereumProvider = new Provider("https://rpc.ankr.com/eth_goerli");
  const wallet = new Wallet(ownerPrivate, zkSyncProvider, ethereumProvider);

  // const MOCK_ADDRESS = "0x1A9BF9B377B49AFaAdDF1435595aBBE032554BbC";
  // const amount = ethers.utils.parseEther("3");

  // const withdrawHandle = await wallet.withdraw({
  //   token: MOCK_ADDRESS,
  //   amount: amount,
  // });

  // console.log(`l2 to l1: ${withdrawHandle.hash}`);
  // await withdrawHandle.wait();

  const tx = await wallet.finalizeWithdrawal(
    "0x88117c8ba155e0ee47c561f1549d5645ed7a7321077b6c9ac3773d1025c0a5dd"
  );
  await tx.wait();
}
