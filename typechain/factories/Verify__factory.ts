/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Verify, VerifyInterface } from "../Verify";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "getPublicKey",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_key",
        type: "address",
      },
    ],
    name: "setPublicKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506106b6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063097eb7591461005c5780632e33445214610078578063715018a6146100965780638da5cb5b146100a0578063f2fde38b146100be575b600080fd5b6100766004803603810190610071919061051a565b6100da565b005b61008061019a565b60405161008d9190610556565b60405180910390f35b61009e610240565b005b6100a86102c8565b6040516100b59190610556565b60405180910390f35b6100d860048036038101906100d3919061051a565b6102f2565b005b6100e26103e9565b73ffffffffffffffffffffffffffffffffffffffff166101006102c8565b73ffffffffffffffffffffffffffffffffffffffff1614610156576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014d906105ce565b60405180910390fd5b80606560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60006101a46103e9565b73ffffffffffffffffffffffffffffffffffffffff166101c26102c8565b73ffffffffffffffffffffffffffffffffffffffff1614610218576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020f906105ce565b60405180910390fd5b606560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6102486103e9565b73ffffffffffffffffffffffffffffffffffffffff166102666102c8565b73ffffffffffffffffffffffffffffffffffffffff16146102bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b3906105ce565b60405180910390fd5b6102c660006103f1565b565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6102fa6103e9565b73ffffffffffffffffffffffffffffffffffffffff166103186102c8565b73ffffffffffffffffffffffffffffffffffffffff161461036e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610365906105ce565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036103dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d490610660565b60405180910390fd5b6103e6816103f1565b50565b600033905090565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104e7826104bc565b9050919050565b6104f7816104dc565b811461050257600080fd5b50565b600081359050610514816104ee565b92915050565b6000602082840312156105305761052f6104b7565b5b600061053e84828501610505565b91505092915050565b610550816104dc565b82525050565b600060208201905061056b6000830184610547565b92915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006105b8602083610571565b91506105c382610582565b602082019050919050565b600060208201905081810360008301526105e7816105ab565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061064a602683610571565b9150610655826105ee565b604082019050919050565b600060208201905081810360008301526106798161063d565b905091905056fea26469706673582212208bd6b4a114ffde085ada1149825c6f03752ffceb29e2259b0a17df5773c1295f64736f6c634300080e0033";

export class Verify__factory extends ContractFactory {
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
  ): Promise<Verify> {
    return super.deploy(overrides || {}) as Promise<Verify>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verify {
    return super.attach(address) as Verify;
  }
  connect(signer: Signer): Verify__factory {
    return super.connect(signer) as Verify__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifyInterface {
    return new utils.Interface(_abi) as VerifyInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Verify {
    return new Contract(address, _abi, signerOrProvider) as Verify;
  }
}
