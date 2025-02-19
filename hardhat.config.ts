/* eslint-disable node/no-missing-import */
import { networks } from "./network";
import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "./scripts/index";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.14",
  defaultNetwork: "hardhat",
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
