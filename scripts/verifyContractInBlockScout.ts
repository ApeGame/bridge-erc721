// eslint-disable-next-line node/no-missing-import
import { ethers, network } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { CONTRACTS } from "../config";
import { artifacts } from "hardhat";
import axios from "axios";
import qs = require("qs");

const { bridge, metadata, metadatav2, mockerc721, proxyAdmin, verifyUrl } =
  CONTRACTS[network.name];

const baseUrl: string = verifyUrl;

let bridgeLogic: string;
let metadataLogic: string;
const erc721ProxyLogic: string = "";

async function main() {
  // verify & push mockerc721
  let res = String(mockerc721).length > 0 ? await isExists(mockerc721) : true;
  if (!res) {
    const myNft = await ethers.getContractFactory("MyNFT");
    console.log(
      `mockerc721(${mockerc721}) verify & push contract, guid: ${await VerifyContract(
        mockerc721,
        "contracts/mock/erc721.sol:MyNFT",
        myNft.interface.encodeDeploy(["aaa", "bbb"]).slice(2)
      )}`
    );
  } else {
    console.log("mockerc721 verify & push contract completed");
  }

  // verify & push erc721ProxyLogic
  res = erc721ProxyLogic.length > 0 ? await isExists(erc721ProxyLogic) : true;
  if (!res) {
    console.log(
      `erc721ProxyLogic(${erc721ProxyLogic}) verify & push contract, guid: ${await VerifyContract(
        erc721ProxyLogic,
        "contracts/erc721Proxy.sol:Erc721Proxy",
        ""
      )}`
    );
  } else {
    console.log("erc721ProxyLogic verify & push contract completed");
  }

  // verify & push bridgeLogic
  if (bridge !== undefined && String(bridge).length > 0) {
    bridgeLogic = await ethers.provider.getStorageAt(
      bridge,
      "0x7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c3"
    );
    bridgeLogic = parseAddress(bridgeLogic);
  }
  res =
    bridgeLogic !== undefined && bridgeLogic.length > 0
      ? await isExists(bridgeLogic)
      : true;
  if (!res) {
    console.log(
      `bridgeLogic(${bridgeLogic}) verify & push contract, guid: ${await VerifyContract(
        bridgeLogic,
        "contracts/bridgeNft.sol:BridgeNFT",
        ""
      )}`
    );
  } else {
    console.log("bridgeLogic verify & push contract completed");
  }

  // verify & push metadataLogic
  if (metadata !== undefined && String(metadata).length > 0) {
    metadataLogic = await ethers.provider.getStorageAt(
      metadata,
      "0x7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c3"
    );
    metadataLogic = parseAddress(metadataLogic);
  }
  res =
    metadataLogic !== undefined && metadataLogic.length > 0
      ? await isExists(metadataLogic)
      : true;
  if (!res) {
    console.log(
      `metadataLogic(${metadataLogic}) verify & push contract, guid: ${await VerifyContract(
        metadataLogic,
        "contracts/Metadata.sol:Metadata",
        ""
      )}`
    );
  } else {
    console.log("metadataLogic verify & push contract completed");
  }

  // verify & push metadataLogic
  if (metadatav2 !== undefined && String(metadatav2).length > 0) {
    metadataLogic = await ethers.provider.getStorageAt(
      metadatav2,
      "0x7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c3"
    );
    metadataLogic = parseAddress(metadataLogic);
  }
  res =
    metadataLogic !== undefined && metadataLogic.length > 0
      ? await isExists(metadataLogic)
      : true;
  if (!res) {
    console.log(
      `metadatav2Logic(${metadataLogic}) verify & push contract, guid: ${await VerifyContract(
        metadataLogic,
        "contracts/MetadataV2.sol:MetadataV2",
        ""
      )}`
    );
  } else {
    console.log("metadatav2Logic verify & push contract completed");
  }

  // verify & push proxy
  res =
    bridge !== undefined && String(bridge).length > 0
      ? await isExists(bridge)
      : true;
  if (!res) {
    const factory = await ethers.getContractFactory("BridgeNFT");
    const proxyFactory = await ethers.getContractFactory(
      "AdminUpgradeabilityProxy"
    );
    const contractorAbi = proxyFactory.interface.encodeDeploy([
      bridgeLogic,
      proxyAdmin,
      factory.interface.encodeFunctionData("initialize"),
    ]);
    console.log(contractorAbi);

    console.log(
      `proxy(${bridge}) verify & push contract, guid: ${await VerifyContract(
        bridge,
        "contracts/lib/Upgrade.sol:AdminUpgradeabilityProxy",
        contractorAbi.slice(2)
      )}`
    );
  } else {
    console.log("proxy contract verify & push contract completed");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
  console.log(`msg ${error}`);
});

function isExists(contract: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    axios
      .request({
        baseURL: baseUrl,
        method: "get",
        params: {
          module: "contract",
          action: "getabi",
          address: contract,
        },
      })
      .then(function (respdata) {
        if (respdata.data.message === "OK") {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(function () {
        resolve(false);
      });
  });
}

async function VerifyContract(
  contract: string,
  contractname: string,
  constructorArguements: string
): Promise<string | undefined> {
  const buildInfo = await artifacts.getBuildInfo(contractname);
  if (buildInfo === undefined) {
    return undefined;
  }
  const data = qs.stringify({
    module: "contract",
    action: "verifysourcecode",
    contractaddress: contract,
    codeformat: "solidity-standard-json-input",
    contractname: contractname,
    compilerversion: "v" + buildInfo.solcLongVersion, // v0.8.14+commit.80d49f37
    sourceCode: JSON.stringify(buildInfo.input),
    constructorArguements: constructorArguements,
  });
  return new Promise((resolve, reject) => {
    axios
      .request({
        baseURL: baseUrl,
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      })
      .then(function (resp) {
        if (resp.data.message === "OK") {
          resolve(resp.data.result);
        } else {
          resolve(`verify & push contract failed: ${resp.data.result}`);
        }
      })
      .catch(function () {
        resolve("verify & push contract failed");
      });
  });
}

function parseAddress(addressString: string): string {
  if (addressString.length === 42) {
    return addressString;
  }
  const buf = Buffer.from(addressString.replace(/^0x/, ""), "hex");
  if (!buf.slice(0, 12).equals(Buffer.alloc(12, 0))) {
    return "";
  }
  const address = "0x" + buf.toString("hex", 12, 32); // grab the last 20 bytes
  return address;
}
