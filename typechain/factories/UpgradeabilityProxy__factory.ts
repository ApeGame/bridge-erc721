/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UpgradeabilityProxy,
  UpgradeabilityProxyInterface,
} from "../UpgradeabilityProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526040516105e63803806105e68339818101604052810190610025919061036f565b7f7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c38060001b14610058576100576103cb565b5b610067826100ef60201b60201c565b6000815111156100e85760008273ffffffffffffffffffffffffffffffffffffffff16826040516100989190610441565b600060405180830381855af49150503d80600081146100d3576040519150601f19603f3d011682016040523d82523d6000602084013e6100d8565b606091505b50509050806100e657600080fd5b505b50506104fb565b6101028161017060201b61002c1760201c565b610141576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610138906104db565b60405180910390fd5b60007f7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c360001b90508181555050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101d2826101a7565b9050919050565b6101e2816101c7565b81146101ed57600080fd5b50565b6000815190506101ff816101d9565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6102588261020f565b810181811067ffffffffffffffff8211171561027757610276610220565b5b80604052505050565b600061028a610193565b9050610296828261024f565b919050565b600067ffffffffffffffff8211156102b6576102b5610220565b5b6102bf8261020f565b9050602081019050919050565b60005b838110156102ea5780820151818401526020810190506102cf565b838111156102f9576000848401525b50505050565b600061031261030d8461029b565b610280565b90508281526020810184848401111561032e5761032d61020a565b5b6103398482856102cc565b509392505050565b600082601f83011261035657610355610205565b5b81516103668482602086016102ff565b91505092915050565b600080604083850312156103865761038561019d565b5b6000610394858286016101f0565b925050602083015167ffffffffffffffff8111156103b5576103b46101a2565b5b6103c185828601610341565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b600081519050919050565b600081905092915050565b600061041b826103fa565b6104258185610405565b93506104358185602086016102cc565b80840191505092915050565b600061044d8284610410565b915081905092915050565b600082825260208201905092915050565b7f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60008201527f6e20746f2061206e6f6e2d636f6e747261637420616464726573730000000000602082015250565b60006104c5603b83610458565b91506104d082610469565b604082019050919050565b600060208201905081810360008301526104f4816104b8565b9050919050565b60dd806105096000396000f3fe608060405236601057600e6018565b005b60166018565b005b601e604f565b602a60266051565b6082565b565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b565b6000807f7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c360001b9050805491505090565b3660008037600080366000845af43d6000803e806000811460a2573d6000f35b3d6000fdfea264697066735822122010bd440ec38086a29298bc1d72004253e5719783a8d3ccf15aef691296f6e83364736f6c634300080e0033";

export class UpgradeabilityProxy__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _logic: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<UpgradeabilityProxy> {
    return super.deploy(
      _logic,
      _data,
      overrides || {}
    ) as Promise<UpgradeabilityProxy>;
  }
  getDeployTransaction(
    _logic: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _data, overrides || {});
  }
  attach(address: string): UpgradeabilityProxy {
    return super.attach(address) as UpgradeabilityProxy;
  }
  connect(signer: Signer): UpgradeabilityProxy__factory {
    return super.connect(signer) as UpgradeabilityProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeabilityProxyInterface {
    return new utils.Interface(_abi) as UpgradeabilityProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeabilityProxy {
    return new Contract(address, _abi, signerOrProvider) as UpgradeabilityProxy;
  }
}
