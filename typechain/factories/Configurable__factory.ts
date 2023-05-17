/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Configurable, ConfigurableInterface } from "../Configurable";

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
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getConfig",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "getConfig",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getConfig",
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
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setConfig",
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
  "0x0002000000000002000100000000000200010000000103550000006001100270000000870010019d0000008001000039000000400010043f00000001012001900000004c0000c13d0000000001000031000000040110008c0000017a0000413d0000000101000367000000000101043b000000e001100270000000890210009c000000540000a13d0000008a0210009c000000b20000a13d0000008b0210009c000000da0000613d0000008c0210009c000001690000613d0000008d0110009c0000017a0000c13d0000000001000416000000000110004c0000017a0000c13d000000040100008a00000000011000310000009502000041000000200310008c000000000300001900000000030240190000009501100197000000000410004c000000000200a019000000950110009c00000000010300190000000001026019000000000110004c0000017a0000c13d00000004010000390000000101100367000000000101043b000000960210009c0000017a0000213d0000003302000039000000000202041a00000096022001970000000003000411000000000232004b000001930000c13d000000000210004c000001a40000c13d000000400100043d000000640210003900000097030000410000000000320435000000440210003900000098030000410000000000320435000000240210003900000026030000390000000000320435000000990200004100000000002104350000000402100039000000200300003900000000003204350000008702000041000000870310009c000000000102801900000040011002100000009a011001c700000218000104300000000001000416000000000110004c0000017a0000c13d0000002001000039000001000010044300000120000004430000008801000041000002170001042e000000900210009c000000800000213d000000930210009c000001070000613d000000940110009c0000017a0000c13d0000000001000416000000000110004c0000017a0000c13d000000040100008a00000000011000310000009502000041000000400310008c000000000300001900000000030240190000009501100197000000000410004c000000000200a019000000950110009c00000000010300190000000001026019000000000110004c0000017a0000c13d00000001010003670000002402100370000000000202043b000000960320009c0000017a0000213d0000000401100370000000000101043b000000000121013f00000000001004350000006501000039000000200010043f021601ab0000040f000000000101041a000000400200043d00000000001204350000008701000041000000870320009c000000000102401900000040011002100000009b011001c7000002170001042e000000910210009c0000012c0000613d000000920110009c0000017a0000c13d0000000001000416000000000110004c0000017a0000c13d000000040100008a00000000011000310000009502000041000000000310004c000000000300001900000000030240190000009501100197000000000410004c000000000200a019000000950110009c00000000010300190000000001026019000000000110004c0000017a0000c13d0000003301000039000000000201041a00000096032001970000000005000411000000000353004b000001930000c13d0000009e02200197000000000021041b000000400100043d00000087020000410000000003000414000000870430009c0000000003028019000000870410009c00000000010280190000004002100210000000c001300210000100000002001d000000000121019f0000009f011001c70000800d020000390000000303000039000000a00400004100000000060000190216020c0000040f00000001012001900000017a0000613d0000000101000029000002170001042e0000008e0210009c0000014d0000613d0000008f0110009c0000017a0000c13d0000000001000416000000000110004c0000017a0000c13d000000040100008a00000000011000310000009502000041000000400310008c000000000300001900000000030240190000009501100197000000000410004c000000000200a019000000950110009c00000000010300190000000001026019000000000110004c0000017a0000c13d00000001010003670000002402100370000000000202043b0000000401100370000000000101043b000000000121013f00000000001004350000006501000039000000200010043f021601ab0000040f000000000101041a000000400200043d00000000001204350000008701000041000000870320009c000000000102401900000040011002100000009b011001c7000002170001042e0000000001000416000000000110004c0000017a0000c13d000000040100008a00000000011000310000009502000041000000600310008c000000000300001900000000030240190000009501100197000000000410004c000000000200a019000000950110009c00000000010300190000000001026019000000000110004c0000017a0000c13d00000024010000390000000101100367000000000201043b000000960120009c0000017a0000213d0000003301000039000000000101041a0000009601100197000100000002001d0000000002000411000000000121004b00000000010000190000000101006039021601b90000040f00000001020003670000000401200370000000000101043b0000000103000029000000000131013f0000004402200370000000000202043b021601e80000040f0000008701000041000000400200043d000000870320009c00000000010240190000004001100210000002170001042e0000000001000416000000000110004c0000017a0000c13d000000040100008a00000000011000310000009502000041000000400310008c000000000300001900000000030240190000009501100197000000000410004c000000000200a019000000950110009c00000000010300190000000001026019000000000110004c0000017a0000c13d0000003301000039000000000101041a00000096011001970000000002000411000000000121004b00000000010000190000000101006039021601b90000040f00000001020003670000000401200370000000000101043b0000002402200370000000000202043b021601e80000040f0000008701000041000000400200043d000000870320009c00000000010240190000004001100210000002170001042e0000000001000416000000000110004c0000017a0000c13d000000040100008a00000000011000310000009502000041000000200310008c000000000300001900000000030240190000009501100197000000000410004c000000000200a019000000950110009c00000000010300190000000001026019000000000110004c0000017a0000c13d00000004010000390000000101100367000000000101043b00000000001004350000006501000039000000200010043f021601ab0000040f000000000101041a000000400200043d00000000001204350000008701000041000000870320009c000000000102401900000040011002100000009b011001c7000002170001042e0000000001000416000000000110004c0000017a0000c13d000000040100008a00000000011000310000009502000041000000000310004c000000000300001900000000030240190000009501100197000000000410004c000000000200a019000000950110009c00000000010300190000000001026019000000000110004c0000017a0000c13d0000003301000039000000000101041a0000009601100197000000400200043d00000000001204350000008701000041000000870320009c000000000102401900000040011002100000009b011001c7000002170001042e0000000001000416000000000110004c0000017a0000c13d000000040100008a00000000011000310000009502000041000000600310008c000000000300001900000000030240190000009501100197000000000410004c000000000200a019000000950110009c00000000010300190000000001026019000000000110004c0000017c0000613d000000000100001900000218000104300000003301000039000000000101041a00000096011001970000000002000411000000000121004b00000000010000190000000101006039021601b90000040f00000001020003670000002401200370000000000101043b0000000403200370000000000303043b000000000113013f0000004402200370000000000202043b021601e80000040f0000008701000041000000400200043d000000870320009c00000000010240190000004001100210000002170001042e000000400100043d00000044021000390000009c03000041000000000032043500000099020000410000000000210435000000240210003900000020030000390000000000320435000000040210003900000000003204350000008702000041000000870310009c000000000102801900000040011002100000009d011001c70000021800010430021601cd0000040f0000008701000041000000400200043d000000870320009c00000000010240190000004001100210000002170001042e00000087010000410000000002000414000000870320009c0000000001024019000000c001100210000000a1011001c70000801002000039021602110000040f0000000102200190000001b70000613d000000000101043b000000000001042d00000000010000190000021800010430000000000110004c000001bc0000613d000000000001042d000000400100043d00000044021000390000009c03000041000000000032043500000099020000410000000000210435000000240210003900000020030000390000000000320435000000040210003900000000003204350000008702000041000000870310009c000000000102801900000040011002100000009d011001c7000002180001043000000096061001970000003301000039000000000201041a0000009e03200197000000000363019f000000000031041b000000400100043d00000087030000410000000004000414000000870540009c0000000004038019000000870510009c00000000010380190000004001100210000000c003400210000000000113019f00000096052001970000009f011001c70000800d020000390000000303000039000000a0040000410216020c0000040f0000000101200190000001e60000613d000000000001042d000000000100001900000218000104300001000000000002000100000002001d00000000001004350000006501000039000000200010043f00000087010000410000000002000414000000870320009c0000000001024019000000c001100210000000a1011001c70000801002000039021602110000040f00000001022001900000020a0000613d000000000101043b000000000101041a0000000102000029000000000121004b000002090000613d00000087010000410000000002000414000000870320009c0000000001024019000000c001100210000000a1011001c70000801002000039021602110000040f00000001022001900000020a0000613d000000000101043b0000000102000029000000000021041b000000000001042d000000000100001900000218000104300000020f002104210000000102000039000000000001042d0000000002000019000000000001042d00000214002104230000000102000039000000000001042d0000000002000019000000000001042d0000021600000432000002170001042e000002180001043000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff0000000200000000000000000000000000000040000001000000000000000000000000000000000000000000000000000000000000000000000000008da5cb5a00000000000000000000000000000000000000000000000000000000b21544f200000000000000000000000000000000000000000000000000000000b21544f300000000000000000000000000000000000000000000000000000000ddf2be3f00000000000000000000000000000000000000000000000000000000f2fde38b000000000000000000000000000000000000000000000000000000008da5cb5b000000000000000000000000000000000000000000000000000000008ec872e3000000000000000000000000000000000000000000000000000000006dd5b69c000000000000000000000000000000000000000000000000000000006dd5b69d00000000000000000000000000000000000000000000000000000000715018a60000000000000000000000000000000000000000000000000000000015fe96dc0000000000000000000000000000000000000000000000000000000052665f478000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff64647265737300000000000000000000000000000000000000000000000000004f776e61626c653a206e6577206f776e657220697320746865207a65726f206108c379a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008400000000000000000000000000000000000000000000000000000000000000200000000000000000000000004f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65720000000000000000000000000000000000000064000000000000000000000000ffffffffffffffffffffffff000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000008be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e00200000000000000000000000000000000000040000000000000000000000000feb9bde24efd3a056cc710619b1b64cab887f88641850fd530e75aa23bd50ef8";

export class Configurable__factory extends ContractFactory {
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
  ): Promise<Configurable> {
    return super.deploy(overrides || {}) as Promise<Configurable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Configurable {
    return super.attach(address) as Configurable;
  }
  connect(signer: Signer): Configurable__factory {
    return super.connect(signer) as Configurable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConfigurableInterface {
    return new utils.Interface(_abi) as ConfigurableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Configurable {
    return new Contract(address, _abi, signerOrProvider) as Configurable;
  }
}
