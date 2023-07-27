import { ethers, network } from "hardhat";
import { VerifyContractEthScan, VerifyProxyEthScan } from "../common-ethscan";
import { VerifyContractBlockScout } from "../common-blockscout";
import { Sleep } from "../common";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../../config";

const { owner, proxyAdmin } = CONTRACTS[network.name];

const payee: string = "0xdab136d1aacef7417d32ae6b8b13651dba4dd580";

async function main() {
  const nonce = await ethers.provider.getTransactionCount(owner);
  // step 1: deploy bridgeNFT
  const _factory = await ethers.getContractFactory("BridgeNFT");
  const factory = await _factory.deploy({ nonce: nonce });
  await factory.deployed();
  // console.log(`deploy logic contract for BridgeNFT : ${factory.address}`);

  const _bridgeProxy = await ethers.getContractFactory(
    "AdminUpgradeabilityProxy"
  );
  const bridgeProxy = await _bridgeProxy.deploy(
    factory.address,
    proxyAdmin,
    factory.interface.encodeFunctionData("initialize"),
    { nonce: nonce + 1 }
  );
  await bridgeProxy.deployed();
  console.log(`Bridge address: ${bridgeProxy.address}`);

  // set bridge gas
  const bridge = await ethers.getContractAt("BridgeNFT", bridgeProxy.address);
  let tx = await bridge.setBridgeGas(300000, 50000, 200000, {
    nonce: nonce + 2,
  });
  await tx.wait();
  console.log(`setBridgeGas completed`);

  // set payee
  tx = await bridge.setPayee(payee, {
    nonce: nonce + 3,
  });
  await tx.wait();
  console.log(`setPayee completed`);

  // set admin
  tx = await bridge.setAdmin(payee, true, {
    nonce: nonce + 4,
  });
  await tx.wait();
  console.log(`setAdmin completed`);

  // sleep 10s
  await Sleep(3000);
  // verify contract
  if (network.name === "basegoerli") {
    console.log(
      `bridgeNFT logic contract(${
        factory.address
      }) verify & push contract, guid: ${await VerifyContractEthScan(
        factory.address,
        "contracts/bridgeNft.sol:BridgeNFT",
        "",
        "https://api-goerli.basescan.org/api",
        "3WGNMRP6F45GDZVQDGEI3DWQDSP4YDJ9JU"
      )}`
    );

    console.log(
      `proxy contract(${
        bridge.address
      }) verify & push contract, guid: ${await VerifyContractEthScan(
        bridge.address,
        "contracts/lib/Upgrade.sol:AdminUpgradeabilityProxy",
        _bridgeProxy.interface
          .encodeDeploy([
            factory.address,
            proxyAdmin,
            _factory.interface.encodeFunctionData("initialize"),
          ])
          .slice(2),
        "https://api-goerli.basescan.org/api",
        "3WGNMRP6F45GDZVQDGEI3DWQDSP4YDJ9JU"
      )}`
    );

    await VerifyProxyEthScan(
      factory.address,
      bridgeProxy.address,
      "https://api-goerli.basescan.org/api",
      "3WGNMRP6F45GDZVQDGEI3DWQDSP4YDJ9JU"
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`deploy err, msg ${error}`);
});
