/* eslint-disable node/no-missing-import */
import { networks } from "./network";
import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.14",
  zksolc: {
    version: "1.3.10",
    compilerSource: "binary",
    settings: {
      // compilerPath: "zksolc",  // optional. Ignored for compilerSource "docker". Can be used if compiler is located in a specific folder
      experimental: {
        dockerImage: "matterlabs/zksolc", // Deprecated! use, compilerSource: "binary"
        tag: "latest", // Deprecated: used for compilerSource: "docker"
      },
      libraries: {}, // optional. References to non-inlinable libraries
      isSystem: false, // optional.  Enables Yul instructions available only for zkSync system contracts and libraries
      forceEvmla: false, // optional. Falls back to EVM legacy assembly if there is a bug with Yul
      optimizer: {
        enabled: true, // optional. True by default
        mode: "3", // optional. 3 by default, z to optimize bytecode size
      },
    },
  },
  defaultNetwork: "zkSyncTestnet",
  networks: networks,
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./cache/artifacts",
  },
  etherscan: {
    apiKey: {
      polygonMumbai: "AETMWJBB9WTFK95EE98W8D3JTBXWGX83SZ",
      polygon: "AETMWJBB9WTFK95EE98W8D3JTBXWGX83SZ",
    },
  },
};

export default config;
