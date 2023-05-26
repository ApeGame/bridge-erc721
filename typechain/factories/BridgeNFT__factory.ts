/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BridgeNFT, BridgeNFTInterface } from "../BridgeNFT";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "srcNft",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Callback",
    type: "event",
  },
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nft",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "srcChId",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "srcNft",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dstChId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "reciver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "dstNft",
        type: "address",
      },
    ],
    name: "Sent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "SetPayee",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "admin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_srcNft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_dstChId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "bridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_srcNft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "bridgeCallBack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_srcNft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_dstChId",
        type: "uint256",
      },
    ],
    name: "delDestNftAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "destNFTAddr",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "destTxFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPayee",
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
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "_srcChid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_dstNft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "sendTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_auth",
        type: "bool",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_srcNft",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_dstChIds",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "_dstNfts",
        type: "address[]",
      },
    ],
    name: "setDestNftAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nft",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_transfer",
        type: "bool",
      },
    ],
    name: "setOrigNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "setPayee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_chids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_fees",
        type: "uint256[]",
      },
    ],
    name: "setTxFee",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506131d4806100206000396000f3fe6080604052600436106101085760003560e01c806363a846f8116100955780639d53468d116100645780639d53468d1461031b578063b1f2b1c914610344578063cd44673514610381578063f2fde38b146103ac578063fded01f0146103d557610108565b806363a846f814610285578063715018a6146102c25780638129fc1c146102d95780638da5cb5b146102f057610108565b80633c299323116100dc5780633c299323146101c5578063410459ad146101ee5780634b0bddd21461021757806351cff8d9146102405780635e583a5a1461026957610108565b806235797a1461010d578063021412bf1461014a578063119393761461017357806339b3d3d21461019c575b600080fd5b34801561011957600080fd5b50610134600480360381019061012f91906121c1565b6103fe565b60405161014191906121fd565b60405180910390f35b34801561015657600080fd5b50610171600480360381019061016c9190612276565b610416565b005b34801561017f57600080fd5b5061019a60048036038101906101959190612422565b610821565b005b3480156101a857600080fd5b506101c360048036038101906101be919061249a565b610998565b005b3480156101d157600080fd5b506101ec60048036038101906101e79190612512565b610ad8565b005b3480156101fa57600080fd5b5061021560048036038101906102109190612552565b610bfc565b005b34801561022357600080fd5b5061023e60048036038101906102399190612512565b610cb6565b005b34801561024c57600080fd5b5061026760048036038101906102629190612552565b610d8d565b005b610283600480360381019061027e919061257f565b610eb9565b005b34801561029157600080fd5b506102ac60048036038101906102a79190612552565b61154a565b6040516102b991906125f5565b60405180910390f35b3480156102ce57600080fd5b506102d761156a565b005b3480156102e557600080fd5b506102ee6115f2565b005b3480156102fc57600080fd5b50610305611686565b604051610312919061261f565b60405180910390f35b34801561032757600080fd5b50610342600480360381019061033d919061263a565b6116b0565b005b34801561035057600080fd5b5061036b6004803603810190610366919061249a565b6119d7565b604051610378919061261f565b60405180910390f35b34801561038d57600080fd5b50610396611a19565b6040516103a3919061261f565b60405180910390f35b3480156103b857600080fd5b506103d360048036038101906103ce9190612552565b611b0c565b005b3480156103e157600080fd5b506103fc60048036038101906103f79190612764565b611c03565b005b60656020528060005260406000206000915090505481565b606860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16806104a057503373ffffffffffffffffffffffffffffffffffffffff16610488611686565b73ffffffffffffffffffffffffffffffffffffffff16145b6104df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d69061284c565b60405180910390fd5b606760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610773573073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16636352211e836040518263ffffffff1660e01b815260040161058191906121fd565b602060405180830381865afa15801561059e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c29190612881565b73ffffffffffffffffffffffffffffffffffffffff1614610618576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060f906128fa565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166323b872dd3085846040518463ffffffff1660e01b81526004016106559392919061291a565b600060405180830381600087803b15801561066f57600080fd5b505af1158015610683573d6000803e3d6000fd5b505050508273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16636352211e836040518263ffffffff1660e01b81526004016106d791906121fd565b602060405180830381865afa1580156106f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107189190612881565b73ffffffffffffffffffffffffffffffffffffffff161461076e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107659061299d565b60405180910390fd5b6107e1565b8173ffffffffffffffffffffffffffffffffffffffff16638c2a993e84836040518363ffffffff1660e01b81526004016107ae9291906129bd565b600060405180830381600087803b1580156107c857600080fd5b505af11580156107dc573d6000803e3d6000fd5b505050505b7ff8230cf0826ce9fb1fa42b50b6e67817f00af3545417652d78da6106004d8a628383836040516108149392919061291a565b60405180910390a1505050565b606860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16806108ab57503373ffffffffffffffffffffffffffffffffffffffff16610893611686565b73ffffffffffffffffffffffffffffffffffffffff16145b6108ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e19061284c565b60405180910390fd5b805182511461092e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092590612a32565b60405180910390fd5b60005b82518110156109935781818151811061094d5761094c612a52565b5b60200260200101516065600085848151811061096c5761096b612a52565b5b60200260200101518152602001908152602001600020819055508080600101915050610931565b505050565b606860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680610a2257503373ffffffffffffffffffffffffffffffffffffffff16610a0a611686565b73ffffffffffffffffffffffffffffffffffffffff16145b610a61576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a589061284c565b60405180910390fd5b606660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555050565b606860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680610b6257503373ffffffffffffffffffffffffffffffffffffffff16610b4a611686565b73ffffffffffffffffffffffffffffffffffffffff16145b610ba1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b989061284c565b60405180910390fd5b80606760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b610c04611df2565b73ffffffffffffffffffffffffffffffffffffffff16610c22611686565b73ffffffffffffffffffffffffffffffffffffffff1614610c78576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6f90612acd565b60405180910390fd5b806069557fb35cb534021632242cdd9c586df6a75869880552d76afbabb674b6bd1f1b4f9f81604051610cab919061261f565b60405180910390a150565b610cbe611df2565b73ffffffffffffffffffffffffffffffffffffffff16610cdc611686565b73ffffffffffffffffffffffffffffffffffffffff1614610d32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2990612acd565b60405180910390fd5b80606860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b610d95611df2565b73ffffffffffffffffffffffffffffffffffffffff16610db3611686565b73ffffffffffffffffffffffffffffffffffffffff1614610e09576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0090612acd565b60405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff1647604051610e2f90612b1e565b60006040518083038185875af1925050503d8060008114610e6c576040519150601f19603f3d011682016040523d82523d6000602084013e610e71565b606091505b5050905080610eb5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eac90612b7f565b60405180910390fd5b5050565b8373ffffffffffffffffffffffffffffffffffffffff1663822f010b846040518263ffffffff1660e01b8152600401610ef291906121fd565b602060405180830381865afa158015610f0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f339190612bb4565b610f72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6990612c2d565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff16636352211e846040518263ffffffff1660e01b8152600401610fab91906121fd565b602060405180830381865afa158015610fc8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fec9190612881565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611059576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105090612c99565b60405180910390fd5b60006110658584611dfa565b905060656000848152602001908152602001600020543410156110bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b490612d05565b60405180910390fd5b606760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561126a578473ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b815260040161114c9392919061291a565b600060405180830381600087803b15801561116657600080fd5b505af115801561117a573d6000803e3d6000fd5b505050503073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16636352211e866040518263ffffffff1660e01b81526004016111ce91906121fd565b602060405180830381865afa1580156111eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120f9190612881565b73ffffffffffffffffffffffffffffffffffffffff1614611265576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125c90612d71565b60405180910390fd5b6112d6565b8473ffffffffffffffffffffffffffffffffffffffff1663dcc67de9856040518263ffffffff1660e01b81526004016112a391906121fd565b600060405180830381600087803b1580156112bd57600080fd5b505af11580156112d1573d6000803e3d6000fd5b505050505b600073ffffffffffffffffffffffffffffffffffffffff16606960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614158015611348575060006065600085815260200190815260200160002054115b15611430576000606960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660656000868152602001908152602001600020546040516113a890612b1e565b60006040518083038185875af1925050503d80600081146113e5576040519150601f19603f3d011682016040523d82523d6000602084013e6113ea565b606091505b505090508061142e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142590612ddd565b60405180910390fd5b505b600060656000858152602001908152602001600020543403905060008111156115015760003373ffffffffffffffffffffffffffffffffffffffff168260405161147990612b1e565b60006040518083038185875af1925050503d80600081146114b6576040519150601f19603f3d011682016040523d82523d6000602084013e6114bb565b606091505b50509050806114ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114f690612e49565b60405180910390fd5b505b7fa32c8d97b98adc135b448bc36f8fd4fbdc09c4a7bd832e5e9a0510051a75f89c33878787878760405161153a96959493929190612e69565b60405180910390a1505050505050565b60686020528060005260406000206000915054906101000a900460ff1681565b611572611df2565b73ffffffffffffffffffffffffffffffffffffffff16611590611686565b73ffffffffffffffffffffffffffffffffffffffff16146115e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115dd90612acd565b60405180910390fd5b6115f06000611ee4565b565b60006115fe6001611faa565b90508015611622576001600060016101000a81548160ff0219169083151502179055505b61162a61209a565b80156116835760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498600160405161167a9190612f1c565b60405180910390a15b50565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff168061173a57503373ffffffffffffffffffffffffffffffffffffffff16611722611686565b73ffffffffffffffffffffffffffffffffffffffff16145b611779576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117709061284c565b60405180910390fd5b606760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611926578273ffffffffffffffffffffffffffffffffffffffff166323b872dd3083856040518463ffffffff1660e01b81526004016118089392919061291a565b600060405180830381600087803b15801561182257600080fd5b505af1158015611836573d6000803e3d6000fd5b505050508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16636352211e846040518263ffffffff1660e01b815260040161188a91906121fd565b602060405180830381865afa1580156118a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118cb9190612881565b73ffffffffffffffffffffffffffffffffffffffff1614611921576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161191890612d71565b60405180910390fd5b611994565b8273ffffffffffffffffffffffffffffffffffffffff16638c2a993e82846040518363ffffffff1660e01b81526004016119619291906129bd565b600060405180830381600087803b15801561197b57600080fd5b505af115801561198f573d6000803e3d6000fd5b505050505b7f14432f6e1dc0e8c1f4c0d81c69cecc80c0bea817a74482492b0211392478ab9b818484876040516119c99493929190612f37565b60405180910390a150505050565b60666020528160005260406000206020528060005260406000206000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000606860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680611aa557503373ffffffffffffffffffffffffffffffffffffffff16611a8d611686565b73ffffffffffffffffffffffffffffffffffffffff16145b611ae4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611adb9061284c565b60405180910390fd5b606960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611b14611df2565b73ffffffffffffffffffffffffffffffffffffffff16611b32611686565b73ffffffffffffffffffffffffffffffffffffffff1614611b88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b7f90612acd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611bf7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bee90612fee565b60405180910390fd5b611c0081611ee4565b50565b606860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680611c8d57503373ffffffffffffffffffffffffffffffffffffffff16611c75611686565b73ffffffffffffffffffffffffffffffffffffffff16145b611ccc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cc39061284c565b60405180910390fd5b8051825114611d10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d0790612a32565b60405180910390fd5b60005b8251811015611dec57818181518110611d2f57611d2e612a52565b5b6020026020010151606660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000858481518110611d8b57611d8a612a52565b5b6020026020010151815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508080600101915050611d13565b50505050565b600033905090565b6000606660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611ede576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ed59061305a565b60405180910390fd5b92915050565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060019054906101000a900460ff16156120215760018260ff16148015611fd95750611fd7306120f3565b155b612018576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161200f906130ec565b60405180910390fd5b60009050612095565b8160ff1660008054906101000a900460ff1660ff1610612076576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161206d906130ec565b60405180910390fd5b816000806101000a81548160ff021916908360ff160217905550600190505b919050565b600060019054906101000a900460ff166120e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120e09061317e565b60405180910390fd5b6120f1612116565b565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600060019054906101000a900460ff16612165576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161215c9061317e565b60405180910390fd5b612175612170611df2565b611ee4565b565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61219e8161218b565b81146121a957600080fd5b50565b6000813590506121bb81612195565b92915050565b6000602082840312156121d7576121d6612181565b5b60006121e5848285016121ac565b91505092915050565b6121f78161218b565b82525050565b600060208201905061221260008301846121ee565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061224382612218565b9050919050565b61225381612238565b811461225e57600080fd5b50565b6000813590506122708161224a565b92915050565b60008060006060848603121561228f5761228e612181565b5b600061229d86828701612261565b93505060206122ae86828701612261565b92505060406122bf868287016121ac565b9150509250925092565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612317826122ce565b810181811067ffffffffffffffff82111715612336576123356122df565b5b80604052505050565b6000612349612177565b9050612355828261230e565b919050565b600067ffffffffffffffff821115612375576123746122df565b5b602082029050602081019050919050565b600080fd5b600061239e6123998461235a565b61233f565b905080838252602082019050602084028301858111156123c1576123c0612386565b5b835b818110156123ea57806123d688826121ac565b8452602084019350506020810190506123c3565b5050509392505050565b600082601f830112612409576124086122c9565b5b813561241984826020860161238b565b91505092915050565b6000806040838503121561243957612438612181565b5b600083013567ffffffffffffffff81111561245757612456612186565b5b612463858286016123f4565b925050602083013567ffffffffffffffff81111561248457612483612186565b5b612490858286016123f4565b9150509250929050565b600080604083850312156124b1576124b0612181565b5b60006124bf85828601612261565b92505060206124d0858286016121ac565b9150509250929050565b60008115159050919050565b6124ef816124da565b81146124fa57600080fd5b50565b60008135905061250c816124e6565b92915050565b6000806040838503121561252957612528612181565b5b600061253785828601612261565b9250506020612548858286016124fd565b9150509250929050565b60006020828403121561256857612567612181565b5b600061257684828501612261565b91505092915050565b6000806000806080858703121561259957612598612181565b5b60006125a787828801612261565b94505060206125b8878288016121ac565b93505060406125c9878288016121ac565b92505060606125da87828801612261565b91505092959194509250565b6125ef816124da565b82525050565b600060208201905061260a60008301846125e6565b92915050565b61261981612238565b82525050565b60006020820190506126346000830184612610565b92915050565b6000806000806080858703121561265457612653612181565b5b6000612662878288016121ac565b945050602061267387828801612261565b9350506040612684878288016121ac565b925050606061269587828801612261565b91505092959194509250565b600067ffffffffffffffff8211156126bc576126bb6122df565b5b602082029050602081019050919050565b60006126e06126db846126a1565b61233f565b9050808382526020820190506020840283018581111561270357612702612386565b5b835b8181101561272c57806127188882612261565b845260208401935050602081019050612705565b5050509392505050565b600082601f83011261274b5761274a6122c9565b5b813561275b8482602086016126cd565b91505092915050565b60008060006060848603121561277d5761277c612181565b5b600061278b86828701612261565b935050602084013567ffffffffffffffff8111156127ac576127ab612186565b5b6127b8868287016123f4565b925050604084013567ffffffffffffffff8111156127d9576127d8612186565b5b6127e586828701612736565b9150509250925092565b600082825260208201905092915050565b7f41646d696e3a2063616c6c6572206973206e6f74207468652061646d696e0000600082015250565b6000612836601e836127ef565b915061284182612800565b602082019050919050565b6000602082019050818103600083015261286581612829565b9050919050565b60008151905061287b8161224a565b92915050565b60006020828403121561289757612896612181565b5b60006128a58482850161286c565b91505092915050565b7f746f6b656e6964206f776e6572206973206e6f74206272696467650000000000600082015250565b60006128e4601b836127ef565b91506128ef826128ae565b602082019050919050565b60006020820190508181036000830152612913816128d7565b9050919050565b600060608201905061292f6000830186612610565b61293c6020830185612610565b61294960408301846121ee565b949350505050565b7f63616c6c6261636b204e4654206661696c656400000000000000000000000000600082015250565b60006129876013836127ef565b915061299282612951565b602082019050919050565b600060208201905081810360008301526129b68161297a565b9050919050565b60006040820190506129d26000830185612610565b6129df60208301846121ee565b9392505050565b7f6c656e677468206d69736d617463680000000000000000000000000000000000600082015250565b6000612a1c600f836127ef565b9150612a27826129e6565b602082019050919050565b60006020820190508181036000830152612a4b81612a0f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612ab76020836127ef565b9150612ac282612a81565b602082019050919050565b60006020820190508181036000830152612ae681612aaa565b9050919050565b600081905092915050565b50565b6000612b08600083612aed565b9150612b1382612af8565b600082019050919050565b6000612b2982612afb565b9150819050919050565b7f7769746864726177206661696c65640000000000000000000000000000000000600082015250565b6000612b69600f836127ef565b9150612b7482612b33565b602082019050919050565b60006020820190508181036000830152612b9881612b5c565b9050919050565b600081519050612bae816124e6565b92915050565b600060208284031215612bca57612bc9612181565b5b6000612bd884828501612b9f565b91505092915050565b7f746f6b656e6964206e6f74206272696467650000000000000000000000000000600082015250565b6000612c176012836127ef565b9150612c2282612be1565b602082019050919050565b60006020820190508181036000830152612c4681612c0a565b9050919050565b7f6e6f7420746f6b656e206f776e65720000000000000000000000000000000000600082015250565b6000612c83600f836127ef565b9150612c8e82612c4d565b602082019050919050565b60006020820190508181036000830152612cb281612c76565b9050919050565b7f696e73756666696369656e742066656500000000000000000000000000000000600082015250565b6000612cef6010836127ef565b9150612cfa82612cb9565b602082019050919050565b60006020820190508181036000830152612d1e81612ce2565b9050919050565b7f7472616e73666572204e4654206661696c656400000000000000000000000000600082015250565b6000612d5b6013836127ef565b9150612d6682612d25565b602082019050919050565b60006020820190508181036000830152612d8a81612d4e565b9050919050565b7f74782066656520636f6c6c656374696f6e206661696c65640000000000000000600082015250565b6000612dc76018836127ef565b9150612dd282612d91565b602082019050919050565b60006020820190508181036000830152612df681612dba565b9050919050565b7f726566756e64206f66206c65667420666565206661696c656400000000000000600082015250565b6000612e336019836127ef565b9150612e3e82612dfd565b602082019050919050565b60006020820190508181036000830152612e6281612e26565b9050919050565b600060c082019050612e7e6000830189612610565b612e8b6020830188612610565b612e9860408301876121ee565b612ea560608301866121ee565b612eb26080830185612610565b612ebf60a0830184612610565b979650505050505050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b6000612f06612f01612efc84612eca565b612ee1565b612ed4565b9050919050565b612f1681612eeb565b82525050565b6000602082019050612f316000830184612f0d565b92915050565b6000608082019050612f4c6000830187612610565b612f596020830186612610565b612f6660408301856121ee565b612f7360608301846121ee565b95945050505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612fd86026836127ef565b9150612fe382612f7c565b604082019050919050565b6000602082019050818103600083015261300781612fcb565b9050919050565b7f64657374204e4654206e6f7420666f756e640000000000000000000000000000600082015250565b60006130446012836127ef565b915061304f8261300e565b602082019050919050565b6000602082019050818103600083015261307381613037565b9050919050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b60006130d6602e836127ef565b91506130e18261307a565b604082019050919050565b60006020820190508181036000830152613105816130c9565b9050919050565b7f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960008201527f6e697469616c697a696e67000000000000000000000000000000000000000000602082015250565b6000613168602b836127ef565b91506131738261310c565b604082019050919050565b600060208201905081810360008301526131978161315b565b905091905056fea264697066735822122050f7bed2900e7d18485664fbd425acfcfc2aafdf18de89a608f0029d83c5308564736f6c634300080e0033";

export class BridgeNFT__factory extends ContractFactory {
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
  ): Promise<BridgeNFT> {
    return super.deploy(overrides || {}) as Promise<BridgeNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BridgeNFT {
    return super.attach(address) as BridgeNFT;
  }
  connect(signer: Signer): BridgeNFT__factory {
    return super.connect(signer) as BridgeNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeNFTInterface {
    return new utils.Interface(_abi) as BridgeNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeNFT {
    return new Contract(address, _abi, signerOrProvider) as BridgeNFT;
  }
}
