/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BaseAdminUpgradeabilityProxy,
  BaseAdminUpgradeabilityProxyInterface,
} from "../BaseAdminUpgradeabilityProxy";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
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
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "_adminAddr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "_imp",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610917806100206000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100675780634f1ef286146100905780635c60da1b146100ac5780638f283970146100d7578063f851a440146101005761005d565b3661005d5761005b61012b565b005b61006561012b565b005b34801561007357600080fd5b5061008e6004803603810190610089919061060f565b610145565b005b6100aa60048036038101906100a591906106a1565b610199565b005b3480156100b857600080fd5b506100c1610267565b6040516100ce9190610710565b60405180910390f35b3480156100e357600080fd5b506100fe60048036038101906100f9919061060f565b6102be565b005b34801561010c57600080fd5b506101156103c1565b6040516101229190610710565b60405180910390f35b610133610418565b61014361013e61041a565b61044b565b565b61014d610471565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff160361018d57610188816104a2565b610196565b61019561012b565b5b50565b6101a1610471565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1603610259576101dc836104a2565b60008373ffffffffffffffffffffffffffffffffffffffff16838360405161020592919061076a565b600060405180830381855af49150503d8060008114610240576040519150601f19603f3d011682016040523d82523d6000602084013e610245565b606091505b505090508061025357600080fd5b50610262565b61026161012b565b5b505050565b6000610271610471565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16036102b2576102ab61041a565b90506102bb565b6102ba61012b565b5b90565b6102c6610471565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16036103b557600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610367576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035e90610806565b60405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f610390610471565b8260405161039f929190610826565b60405180910390a16103b0816104f1565b6103be565b6103bd61012b565b5b50565b60006103cb610471565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff160361040c57610405610471565b9050610415565b61041461012b565b5b90565b565b6000807f7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c360001b9050805491505090565b3660008037600080366000845af43d6000803e806000811461046c573d6000f35b3d6000fd5b6000807f10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b60001b9050805491505090565b6104ab81610520565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b60007f10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b60001b90508181555050565b61052981610597565b610568576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055f906108c1565b60405180910390fd5b60007f7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c360001b90508181555050565b6000813b60008111915050919050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006105dc826105b1565b9050919050565b6105ec816105d1565b81146105f757600080fd5b50565b600081359050610609816105e3565b92915050565b600060208284031215610625576106246105a7565b5b6000610633848285016105fa565b91505092915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126106615761066061063c565b5b8235905067ffffffffffffffff81111561067e5761067d610641565b5b60208301915083600182028301111561069a57610699610646565b5b9250929050565b6000806000604084860312156106ba576106b96105a7565b5b60006106c8868287016105fa565b935050602084013567ffffffffffffffff8111156106e9576106e86105ac565b5b6106f58682870161064b565b92509250509250925092565b61070a816105d1565b82525050565b60006020820190506107256000830184610701565b92915050565b600081905092915050565b82818337600083830152505050565b6000610751838561072b565b935061075e838584610736565b82840190509392505050565b6000610777828486610745565b91508190509392505050565b600082825260208201905092915050565b7f43616e6e6f74206368616e6765207468652061646d696e206f6620612070726f60008201527f787920746f20746865207a65726f206164647265737300000000000000000000602082015250565b60006107f0603683610783565b91506107fb82610794565b604082019050919050565b6000602082019050818103600083015261081f816107e3565b9050919050565b600060408201905061083b6000830185610701565b6108486020830184610701565b9392505050565b7f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60008201527f6e20746f2061206e6f6e2d636f6e747261637420616464726573730000000000602082015250565b60006108ab603b83610783565b91506108b68261084f565b604082019050919050565b600060208201905081810360008301526108da8161089e565b905091905056fea264697066735822122028bbf44c680f7892b398be1299c7cbe862b288f0b80ed5a7135e0ecbb71e3a3564736f6c634300080e0033";

export class BaseAdminUpgradeabilityProxy__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BaseAdminUpgradeabilityProxy> {
    return super.deploy(
      overrides || {}
    ) as Promise<BaseAdminUpgradeabilityProxy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BaseAdminUpgradeabilityProxy {
    return super.attach(address) as BaseAdminUpgradeabilityProxy;
  }
  connect(signer: Signer): BaseAdminUpgradeabilityProxy__factory {
    return super.connect(signer) as BaseAdminUpgradeabilityProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseAdminUpgradeabilityProxyInterface {
    return new utils.Interface(_abi) as BaseAdminUpgradeabilityProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseAdminUpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BaseAdminUpgradeabilityProxy;
  }
}
