/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ITransactionManager,
  ITransactionManagerInterface,
} from "../ITransactionManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LiquidityAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "LiquidityRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "router",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingChainFallback",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAddress",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "callDataHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "sendingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "receivingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preparedBlockNumber",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct ITransactionManager.TransactionData",
        name: "txData",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "relayerFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "TransactionCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "router",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingChainFallback",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAddress",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "callDataHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "sendingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "receivingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preparedBlockNumber",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct ITransactionManager.TransactionData",
        name: "txData",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "relayerFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "TransactionFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "router",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingChainFallback",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAddress",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "callDataHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "sendingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "receivingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preparedBlockNumber",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct ITransactionManager.TransactionData",
        name: "txData",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "encryptedCallData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "encodedBid",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "bidSignature",
        type: "bytes",
      },
    ],
    name: "TransactionPrepared",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
    ],
    name: "addLiquidity",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "router",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingChainFallback",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAddress",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "callDataHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "sendingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "receivingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preparedBlockNumber",
            type: "uint256",
          },
        ],
        internalType: "struct ITransactionManager.TransactionData",
        name: "txData",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "relayerFee",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "cancel",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "router",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingChainFallback",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAddress",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "callDataHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "sendingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "receivingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preparedBlockNumber",
            type: "uint256",
          },
        ],
        internalType: "struct ITransactionManager.TransactionData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "router",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingChainFallback",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAddress",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "callDataHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "sendingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "receivingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preparedBlockNumber",
            type: "uint256",
          },
        ],
        internalType: "struct ITransactionManager.TransactionData",
        name: "txData",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "relayerFee",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
    ],
    name: "fulfill",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "router",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingChainFallback",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAddress",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "callDataHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "sendingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "receivingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preparedBlockNumber",
            type: "uint256",
          },
        ],
        internalType: "struct ITransactionManager.TransactionData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "router",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingChainFallback",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "sendingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "receivingChainId",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "callDataHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
        ],
        internalType: "struct ITransactionManager.InvariantTransactionData",
        name: "txData",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "encryptedCallData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "encodedBid",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "bidSignature",
        type: "bytes",
      },
    ],
    name: "prepare",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "router",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingChainFallback",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAddress",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "callDataHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "sendingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "receivingChainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preparedBlockNumber",
            type: "uint256",
          },
        ],
        internalType: "struct ITransactionManager.TransactionData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
    ],
    name: "removeLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITransactionManager__factory {
  static readonly abi = _abi;
  static createInterface(): ITransactionManagerInterface {
    return new utils.Interface(_abi) as ITransactionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITransactionManager {
    return new Contract(address, _abi, signerOrProvider) as ITransactionManager;
  }
}