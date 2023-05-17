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

  const MOCK_ADDRESS = "0x113d7546f66555C8124a71a2886Ac855272e4ab1";
  const amount = "3000000000000000000";
  // const txHandle = await wallet.approveERC20(MOCK_ADDRESS, amount, {});
  // await txHandle.wait();

  const depositHandle = await wallet.deposit({
    token: MOCK_ADDRESS,
    amount: amount,
    // approveERC20: true,
  });

  console.log(`l1 to l2: ${depositHandle.hash}`);
  // Note that we wait not only for the L1 transaction to complete but also for it to be
  // processed by zkSync. If we want to wait only for the transaction to be processed on L1,
  // we can use `await depositHandle.waitL1Commit()`
  // await depositHandle.wait();
  await depositHandle.waitL1Commit();
}
