/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface BridgeNFTInterface extends ethers.utils.Interface {
  functions: {
    "admin(address)": FunctionFragment;
    "bridge(address,uint256,uint256,address)": FunctionFragment;
    "bridgeCallBack(address,address,uint256)": FunctionFragment;
    "bridgeMintGas()": FunctionFragment;
    "delDestNftAddr(address,uint256)": FunctionFragment;
    "destNFTAddr(address,uint256)": FunctionFragment;
    "destTxFee(uint256)": FunctionFragment;
    "getPayee()": FunctionFragment;
    "initialize()": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerOfGas()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "sendTo(uint256,address,uint256,address)": FunctionFragment;
    "setAdmin(address,bool)": FunctionFragment;
    "setBridgeGas(uint256,uint256,uint256)": FunctionFragment;
    "setDestNftAddr(address,uint256[],address[])": FunctionFragment;
    "setOrigNFT(address,bool)": FunctionFragment;
    "setPayee(address)": FunctionFragment;
    "setTxFee(uint256[],uint256[])": FunctionFragment;
    "transferFromGas()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "admin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "bridge",
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "bridgeCallBack",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bridgeMintGas",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "delDestNftAddr",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "destNFTAddr",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "destTxFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getPayee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOfGas",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendTo",
    values: [BigNumberish, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setBridgeGas",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDestNftAddr",
    values: [string, BigNumberish[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setOrigNFT",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "setPayee", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setTxFee",
    values: [BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFromGas",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values: [string]): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bridgeCallBack",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bridgeMintGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delDestNftAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "destNFTAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "destTxFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPayee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOfGas", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBridgeGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDestNftAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOrigNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPayee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setTxFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFromGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Callback(address,address,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Received(address,address,uint256,uint256)": EventFragment;
    "Sent(address,address,uint256,uint256,address,address)": EventFragment;
    "SetBridgeGas(uint256,uint256,uint256)": EventFragment;
    "SetPayee(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Callback"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetBridgeGas"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetPayee"): EventFragment;
}

export type CallbackEvent = TypedEvent<
  [string, string, BigNumber] & {
    sender: string;
    srcNft: string;
    tokenId: BigNumber;
  }
>;

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type ReceivedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    receiver: string;
    nft: string;
    id: BigNumber;
    srcChId: BigNumber;
  }
>;

export type SentEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, string, string] & {
    sender: string;
    srcNft: string;
    tokenId: BigNumber;
    dstChId: BigNumber;
    reciver: string;
    dstNft: string;
  }
>;

export type SetBridgeGasEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber] & {
    bridgeMintGaslimit: BigNumber;
    ownerOfGaslimit: BigNumber;
    transferFromGaslimit: BigNumber;
  }
>;

export type SetPayeeEvent = TypedEvent<[string] & { to: string }>;

export class BridgeNFT extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BridgeNFTInterface;

  functions: {
    admin(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    bridge(
      _srcNft: string,
      _tokenId: BigNumberish,
      _dstChId: BigNumberish,
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bridgeCallBack(
      _sender: string,
      _srcNft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bridgeMintGas(overrides?: CallOverrides): Promise<[BigNumber]>;

    delDestNftAddr(
      _srcNft: string,
      _dstChId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    destNFTAddr(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    destTxFee(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPayee(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerOfGas(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendTo(
      _srcChid: BigNumberish,
      _dstNft: string,
      _tokenId: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAdmin(
      _user: string,
      _auth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBridgeGas(
      _bridgeMintGas: BigNumberish,
      _ownerOfGas: BigNumberish,
      _transferFromGas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDestNftAddr(
      _srcNft: string,
      _dstChIds: BigNumberish[],
      _dstNfts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOrigNFT(
      _nft: string,
      _transfer: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPayee(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTxFee(
      _chids: BigNumberish[],
      _fees: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFromGas(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  admin(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  bridge(
    _srcNft: string,
    _tokenId: BigNumberish,
    _dstChId: BigNumberish,
    _receiver: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bridgeCallBack(
    _sender: string,
    _srcNft: string,
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bridgeMintGas(overrides?: CallOverrides): Promise<BigNumber>;

  delDestNftAddr(
    _srcNft: string,
    _dstChId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  destNFTAddr(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  destTxFee(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  getPayee(overrides?: CallOverrides): Promise<string>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerOfGas(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendTo(
    _srcChid: BigNumberish,
    _dstNft: string,
    _tokenId: BigNumberish,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAdmin(
    _user: string,
    _auth: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBridgeGas(
    _bridgeMintGas: BigNumberish,
    _ownerOfGas: BigNumberish,
    _transferFromGas: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDestNftAddr(
    _srcNft: string,
    _dstChIds: BigNumberish[],
    _dstNfts: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOrigNFT(
    _nft: string,
    _transfer: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPayee(
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTxFee(
    _chids: BigNumberish[],
    _fees: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFromGas(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    admin(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    bridge(
      _srcNft: string,
      _tokenId: BigNumberish,
      _dstChId: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    bridgeCallBack(
      _sender: string,
      _srcNft: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    bridgeMintGas(overrides?: CallOverrides): Promise<BigNumber>;

    delDestNftAddr(
      _srcNft: string,
      _dstChId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    destNFTAddr(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    destTxFee(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPayee(overrides?: CallOverrides): Promise<string>;

    initialize(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerOfGas(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sendTo(
      _srcChid: BigNumberish,
      _dstNft: string,
      _tokenId: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setAdmin(
      _user: string,
      _auth: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setBridgeGas(
      _bridgeMintGas: BigNumberish,
      _ownerOfGas: BigNumberish,
      _transferFromGas: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setDestNftAddr(
      _srcNft: string,
      _dstChIds: BigNumberish[],
      _dstNfts: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    setOrigNFT(
      _nft: string,
      _transfer: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setPayee(to: string, overrides?: CallOverrides): Promise<void>;

    setTxFee(
      _chids: BigNumberish[],
      _fees: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferFromGas(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(_to: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Callback(address,address,uint256)"(
      sender?: null,
      srcNft?: null,
      tokenId?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; srcNft: string; tokenId: BigNumber }
    >;

    Callback(
      sender?: null,
      srcNft?: null,
      tokenId?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sender: string; srcNft: string; tokenId: BigNumber }
    >;

    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Received(address,address,uint256,uint256)"(
      receiver?: null,
      nft?: null,
      id?: null,
      srcChId?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      { receiver: string; nft: string; id: BigNumber; srcChId: BigNumber }
    >;

    Received(
      receiver?: null,
      nft?: null,
      id?: null,
      srcChId?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      { receiver: string; nft: string; id: BigNumber; srcChId: BigNumber }
    >;

    "Sent(address,address,uint256,uint256,address,address)"(
      sender?: null,
      srcNft?: null,
      tokenId?: null,
      dstChId?: null,
      reciver?: null,
      dstNft?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, string, string],
      {
        sender: string;
        srcNft: string;
        tokenId: BigNumber;
        dstChId: BigNumber;
        reciver: string;
        dstNft: string;
      }
    >;

    Sent(
      sender?: null,
      srcNft?: null,
      tokenId?: null,
      dstChId?: null,
      reciver?: null,
      dstNft?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, string, string],
      {
        sender: string;
        srcNft: string;
        tokenId: BigNumber;
        dstChId: BigNumber;
        reciver: string;
        dstNft: string;
      }
    >;

    "SetBridgeGas(uint256,uint256,uint256)"(
      bridgeMintGaslimit?: null,
      ownerOfGaslimit?: null,
      transferFromGaslimit?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      {
        bridgeMintGaslimit: BigNumber;
        ownerOfGaslimit: BigNumber;
        transferFromGaslimit: BigNumber;
      }
    >;

    SetBridgeGas(
      bridgeMintGaslimit?: null,
      ownerOfGaslimit?: null,
      transferFromGaslimit?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      {
        bridgeMintGaslimit: BigNumber;
        ownerOfGaslimit: BigNumber;
        transferFromGaslimit: BigNumber;
      }
    >;

    "SetPayee(address)"(to?: null): TypedEventFilter<[string], { to: string }>;

    SetPayee(to?: null): TypedEventFilter<[string], { to: string }>;
  };

  estimateGas: {
    admin(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    bridge(
      _srcNft: string,
      _tokenId: BigNumberish,
      _dstChId: BigNumberish,
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bridgeCallBack(
      _sender: string,
      _srcNft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bridgeMintGas(overrides?: CallOverrides): Promise<BigNumber>;

    delDestNftAddr(
      _srcNft: string,
      _dstChId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    destNFTAddr(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    destTxFee(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPayee(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOfGas(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendTo(
      _srcChid: BigNumberish,
      _dstNft: string,
      _tokenId: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAdmin(
      _user: string,
      _auth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBridgeGas(
      _bridgeMintGas: BigNumberish,
      _ownerOfGas: BigNumberish,
      _transferFromGas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDestNftAddr(
      _srcNft: string,
      _dstChIds: BigNumberish[],
      _dstNfts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOrigNFT(
      _nft: string,
      _transfer: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPayee(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTxFee(
      _chids: BigNumberish[],
      _fees: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFromGas(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    admin(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bridge(
      _srcNft: string,
      _tokenId: BigNumberish,
      _dstChId: BigNumberish,
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bridgeCallBack(
      _sender: string,
      _srcNft: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bridgeMintGas(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delDestNftAddr(
      _srcNft: string,
      _dstChId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    destNFTAddr(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    destTxFee(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPayee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOfGas(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendTo(
      _srcChid: BigNumberish,
      _dstNft: string,
      _tokenId: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAdmin(
      _user: string,
      _auth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBridgeGas(
      _bridgeMintGas: BigNumberish,
      _ownerOfGas: BigNumberish,
      _transferFromGas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDestNftAddr(
      _srcNft: string,
      _dstChIds: BigNumberish[],
      _dstNfts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOrigNFT(
      _nft: string,
      _transfer: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPayee(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTxFee(
      _chids: BigNumberish[],
      _fees: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFromGas(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
