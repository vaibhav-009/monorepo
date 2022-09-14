/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BridgeRouter,
  BridgeRouterInterface,
} from "../../../contracts/test/BridgeRouter";

const _abi = [
  {
    inputs: [],
    name: "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
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
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
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
        indexed: true,
        internalType: "uint64",
        name: "originAndNonce",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "liquidityProvider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Receive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "toDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "toId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "toHook",
        type: "bool",
      },
    ],
    name: "Send",
    type: "event",
  },
  {
    inputs: [],
    name: "DUST_AMOUNT",
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
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_custom",
        type: "address",
      },
    ],
    name: "enrollCustom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "enrollRemoteRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_nonce",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenRegistry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "liquidityProvider",
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
        internalType: "address",
        name: "_oldRepr",
        type: "address",
      },
    ],
    name: "migrate",
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
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
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
    name: "proposedTimestamp",
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
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "remotes",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    inputs: [],
    name: "renounced",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_destination",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_recipient",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_destination",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_remoteHook",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_extraData",
        type: "bytes",
      },
    ],
    name: "sendToHook",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "setXAppConnectionManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenRegistry",
    outputs: [
      {
        internalType: "contract ITokenRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "xAppConnectionManager",
    outputs: [
      {
        internalType: "contract IConnectorManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061333f806100206000396000f3fe60806040526004361061012e5760003560e01c806397f641ab116100ab578063b49c53a71161006f578063b49c53a714610345578063bc7dbab314610365578063c5b350df14610385578063ce5494bb1461039a578063d1851c92146103ba578063d232c220146103d857600080fd5b806397f641ab146102aa5780639d23c4c7146102c5578063a9bd1226146102e5578063ab2dc3f514610305578063b1f8100d1461032557600080fd5b8063546d573d116100f2578063546d573d146101f85780636a42b8f81461022e578063715018a61461024457806383bbb806146102595780638da5cb5b1461028657600080fd5b806328b1aea01461013a5780633339df961461015c5780633cf52ffb1461019957806341bdc8b5146101b8578063485cc955146101d857600080fd5b3661013557005b600080fd5b34801561014657600080fd5b5061015a610155366004612a4a565b61040e565b005b34801561016857600080fd5b5060345461017c906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101a557600080fd5b506002545b604051908152602001610190565b3480156101c457600080fd5b5061015a6101d3366004612a8c565b610576565b3480156101e457600080fd5b5061015a6101f3366004612aa9565b6105c9565b34801561020457600080fd5b5061017c610213366004612ae2565b6099602052600090815260409020546001600160a01b031681565b34801561023a57600080fd5b5062093a806101aa565b34801561025057600080fd5b5061015a6106ba565b34801561026557600080fd5b506101aa610274366004612afb565b60666020526000908152604090205481565b34801561029257600080fd5b506000546201000090046001600160a01b031661017c565b3480156102b657600080fd5b506101aa66d529ae9e86000081565b3480156102d157600080fd5b5060985461017c906001600160a01b031681565b3480156102f157600080fd5b5061015a610300366004612b26565b6106ed565b34801561031157600080fd5b5061015a610320366004612bf4565b6107be565b34801561033157600080fd5b5061015a610340366004612a8c565b610911565b34801561035157600080fd5b5061015a610360366004612ca3565b6109c5565b34801561037157600080fd5b506101aa610380366004612ccf565b610a0f565b34801561039157600080fd5b5061015a610aee565b3480156103a657600080fd5b5061015a6103b5366004612a8c565b610b5e565b3480156103c657600080fd5b506001546001600160a01b031661017c565b3480156103e457600080fd5b506103fe6000546201000090046001600160a01b03161590565b6040519015158152602001610190565b6000546201000090046001600160a01b0316331461043f576040516311a8a1bb60e31b815260040160405180910390fd5b6040516340c10f1960e01b8152306004820152600160248201526001600160a01b038216906340c10f1990604401600060405180830381600087803b15801561048757600080fd5b505af115801561049b573d6000803e3d6000fd5b5050604051632770a7eb60e21b8152306004820152600160248201526001600160a01b0384169250639dc29fac9150604401600060405180830381600087803b1580156104e757600080fd5b505af11580156104fb573d6000803e3d6000fd5b50506098546040516301458d7560e51b815263ffffffff87166004820152602481018690526001600160a01b03858116604483015290911692506328b1aea09150606401600060405180830381600087803b15801561055957600080fd5b505af115801561056d573d6000803e3d6000fd5b50505050505050565b6000546201000090046001600160a01b031633146105a7576040516311a8a1bb60e31b815260040160405180910390fd5b603480546001600160a01b0319166001600160a01b0392909216919091179055565b600054610100900460ff16158080156105e95750600054600160ff909116105b806106035750303b158015610603575060005460ff166001145b6106285760405162461bcd60e51b815260040161061f90612d79565b60405180910390fd5b6000805460ff19166001179055801561064b576000805461ff0019166101001790555b609880546001600160a01b0319166001600160a01b03851617905561066f82610d54565b80156106b5576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b6000546201000090046001600160a01b031633146106eb576040516311a8a1bb60e31b815260040160405180910390fd5b565b816107235760405162461bcd60e51b815260206004820152600660248201526502172656369760d41b604482015260640161061f565b600080600061073188610e3a565b9250925092506107428888836110ed565b600061074f868985611154565b905061075c878583611192565b5060408051878152602081018a9052600081830152905163ffffffff89169133916001600160a01b038d16917fa3d219cf126a12be40d7ad1ceef46231c987988dd4e686457b610e1b6b80a4bf919081900360600190a4505050505050505050565b6107c73361129b565b6107fe5760405162461bcd60e51b8152602060048201526008602482015267217265706c69636160c01b604482015260640161061f565b838261080a8282611310565b6108475760405162461bcd60e51b815260206004820152600e60248201526d10b932b6b7ba32903937baba32b960911b604482015260640161061f565b60006108616108568583611337565b62ffffff1916611352565b9050600061087462ffffff19831661136b565b9050600061088762ffffff1984166113a4565b905061089862ffffff1982166113fc565b156108ae576108a989898484611409565b610906565b6108bd62ffffff19821661143a565b156108ce576108a989898484611447565b60405162461bcd60e51b815260206004820152600d60248201526c10bb30b634b21030b1ba34b7b760991b604482015260640161061f565b505050505050505050565b6000546201000090046001600160a01b03163314610942576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b03828116911614801561096757506001600160a01b03811615155b15610985576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b038083166201000090920416036109b957604051634a2fb73f60e11b815260040160405180910390fd5b6109c281611581565b50565b6000546201000090046001600160a01b031633146109f6576040516311a8a1bb60e31b815260040160405180910390fd5b63ffffffff909116600090815260666020526040902055565b600080600080610a1e8a610e3a565b925092509250610a2f8a8a836110ed565b6000610a74888b85338b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506115cf92505050565b90506000610a838a8684611192565b604080518b8152602081018e905260019181019190915290915063ffffffff8b169033906001600160a01b038f16907fa3d219cf126a12be40d7ad1ceef46231c987988dd4e686457b610e1b6b80a4bf9060600160405180910390a49b9a5050505050505050505050565b6001546001600160a01b03163314610b19576040516311a7f27160e11b815260040160405180910390fd5b62093a8060025442610b2b9190612ddd565b11610b495760405163d39c12bb60e01b815260040160405180910390fd5b6001546106eb906001600160a01b03166115f1565b609854604051630e71e25160e01b81526001600160a01b0383811660048301526000921690630e71e25190602401602060405180830381865afa158015610ba9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcd9190612df4565b9050816001600160a01b0316816001600160a01b031603610c1d5760405162461bcd60e51b815260206004820152600a60248201526908591a5999995c995b9d60b21b604482015260640161061f565b6040516370a0823160e01b815233600482015282906000906001600160a01b038316906370a0823190602401602060405180830381865afa158015610c66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8a9190612e11565b604051632770a7eb60e21b8152336004820152602481018290529091506001600160a01b03831690639dc29fac90604401600060405180830381600087803b158015610cd557600080fd5b505af1158015610ce9573d6000803e3d6000fd5b50506040516340c10f1960e01b8152336004820152602481018490526001600160a01b03861692506340c10f1991506044015b600060405180830381600087803b158015610d3657600080fd5b505af1158015610d4a573d6000803e3d6000fd5b5050505050505050565b600054610100900460ff1615808015610d745750600054600160ff909116105b80610d8e5750303b158015610d8e575060005460ff166001145b610daa5760405162461bcd60e51b815260040161061f90612d79565b6000805460ff191660011790558015610dcd576000805461ff0019166101001790555b603480546001600160a01b0319166001600160a01b038416179055610df0611661565b8015610e36576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b6098546040516378a9bb4360e11b81526001600160a01b038381166004830152600092839283928392839291169063f1537686906024016040805180830381865afa158015610e8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb19190612e2a565b91509150610ebf8282611690565b60985460405163c86415cb60e01b81526001600160a01b03808a16600483015292975088929091169063c86415cb90602401602060405180830381865afa158015610f0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f329190612e58565b1561107a5761106f816001600160a01b03166306fdde036040518163ffffffff1660e01b81526004016000604051808303816000875af1158015610f7a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610fa29190810190612ea1565b826001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015610fe0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526110089190810190612ea1565b836001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611046573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106a9190612f0f565b6116bd565b9450600193506110e3565b806001600160a01b0316634815fcb16040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110dc9190612e11565b9450600093505b5050509193909250565b816000036110fa57505050565b82811561111b576111166001600160a01b0385163330866116f9565b61114e565b604051632770a7eb60e21b8152336004820152602481018490526001600160a01b03821690639dc29fac90604401610d1c565b50505050565b60006111886003808686866040516020016111729493929190612f6d565b60408051601f1981840301815291905290611337565b90505b9392505050565b60008061119e85611764565b9050603460009054906101000a90046001600160a01b03166001600160a01b0316639fa92f9d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156111f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112179190612df4565b6001600160a01b031663fa31de01868361123188886117b6565b6040518463ffffffff1660e01b815260040161124f93929190612fc0565b6020604051808303816000875af115801561126e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112929190612e11565b95945050505050565b603454604051635190bc5360e01b81526001600160a01b0383811660048301526000921690635190bc5390602401602060405180830381865afa1580156112e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130a9190612e58565b92915050565b63ffffffff82166000908152606660205260408120548214801561118b5750501515919050565b81516000906020840161129264ffffffffff85168284611885565b600061130a611360836118ca565b62ffffff19166118fc565b6000816002611382815b62ffffff19841690611957565b5061139c6000602460015b62ffffff198816929190611a30565b949350505050565b60008160026113b281611375565b5060006113cd6024601887901c6001600160601b0316612ddd565b905060006113da86611aa0565b60ff1690506113f262ffffff19871660248484611a30565b9695505050505050565b600061130a826003611ab5565b600061141a62ffffff198316611b14565b90506114298585858585611b34565b5061143381611e37565b5050505050565b600061130a826005611ab5565b600061145862ffffff198316611e8d565b905060006114698686868686611b34565b905060006302424a7f60e11b8761148562ffffff198716611e9b565b61149462ffffff198916611ebd565b6114a362ffffff198a16611edf565b866114b362ffffff198b16611f01565b6114d06114c562ffffff198d16611f16565b62ffffff1916611f48565b6040516024016114e69796959493929190612fe5565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050826001600160a01b031681604051611533919061303b565b6000604051808303816000865af19150503d8060008114611570576040519150601f19603f3d011682016040523d82523d6000602084013e611575565b606091505b50505050505050505050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b60006113f2600580888888888860405160200161117296959493929190613057565b600080546001600160a01b038381166201000081810262010000600160b01b031985161785556002859055600180546001600160a01b031916905560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b600054610100900460ff166116885760405162461bcd60e51b815260040161061f906130a0565b6106eb611f91565b600061118b60016040516001600160e01b031960e087901b16602082015260248101859052604401611172565b6000835184845185856040516020016116da9594939291906130eb565b6040516020818303038152906040528051906020012090509392505050565b6040516001600160a01b038085166024830152831660448201526064810182905261114e9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611fc1565b63ffffffff8116600090815260666020526040902054806117b15760405162461bcd60e51b81526020600482015260076024820152662172656d6f746560c81b604482015260640161061f565b919050565b60608260016117c481611375565b506117ce84612093565b6118045760405162461bcd60e51b815260206004820152600760248201526610b0b1ba34b7b760c91b604482015260640161061f565b60408051600280825260608201835260009260208301908036833701905050905085816000815181106118395761183961314b565b602002602001019062ffffff1916908162ffffff19168152505084816001815181106118675761186761314b565b62ffffff19909216602092830291909101909101526113f2816120ad565b6000806118928385613161565b90506040518111156118a2575060005b806000036118b75762ffffff1991505061118b565b606085811b8517901b831760181b611292565b60006118d582612102565b156118f2576301000000600160d81b038216600160d91b1761130a565b62ffffff1961130a565b60006119078261213a565b6119535760405162461bcd60e51b815260206004820152601960248201527f56616c696469747920617373657274696f6e206661696c656400000000000000604482015260640161061f565b5090565b60006119638383612177565b611a295760006119826119768560d81c90565b64ffffffffff1661219a565b91505060006119978464ffffffffff1661219a565b6040517f5479706520617373657274696f6e206661696c65642e20476f7420307800000060208201526001600160b01b031960b086811b8216603d8401526c05c408af0e0cac6e8cac84060f609b1b604784015283901b16605482015290925060009150605e0160405160208183030381529060405290508060405162461bcd60e51b815260040161061f9190613179565b5090919050565b600080611a468660781c6001600160601b031690565b6001600160601b03169050611a5a86612248565b84611a658784613161565b611a6f9190613161565b1115611a825762ffffff1991505061139c565b611a8c8582613161565b90506113f28364ffffffffff168286611885565b600061130a62ffffff19831660246001612281565b6000816006811115611ac957611ac9612f32565b60ff16611ad5846122b1565b60ff1614801561118b5750816006811115611af257611af2612f32565b611afb846122c5565b6006811115611b0c57611b0c612f32565b149392505050565b6000816003611b2281611375565b5061139c62ffffff198516600d6122e0565b6098546000906001600160a01b031663b869d89a611b5762ffffff198716611ebd565b611b6662ffffff198816611edf565b6040516001600160e01b031960e085901b16815263ffffffff92909216600483015260248201526044016020604051808303816000875af1158015611baf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bd39190612df4565b90506000611be662ffffff198516611f01565b905080600003611c63576001600160a01b0380841690831667ffffffff0000000060208a901b1663ffffffff89161760408051600081526020810186905267ffffffffffffffff92909216917f9f9a97db84f39202ca3b409b63f7ccf7d3fd810e176573c7483088b6f181bbbb910160405180910390a450611292565b60985460405163c86415cb60e01b81526001600160a01b0384811660048301529091169063c86415cb90602401602060405180830381865afa158015611cad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cd19190612e58565b15611cef57611cea6001600160a01b03831684836122ee565b611dc0565b6040516340c10f1960e01b81526001600160a01b038481166004830152602482018390528316906340c10f1990604401600060405180830381600087803b158015611d3957600080fd5b505af1158015611d4d573d6000803e3d6000fd5b50505050816001600160a01b031663cc2ab7c7611d6f8662ffffff191661231e565b6040518263ffffffff1660e01b8152600401611d8d91815260200190565b600060405180830381600087803b158015611da757600080fd5b505af1158015611dbb573d6000803e3d6000fd5b505050505b6001600160a01b0380841690831667ffffffff0000000060208a901b1663ffffffff89161760408051600081526020810186905267ffffffffffffffff92909216917f9f9a97db84f39202ca3b409b63f7ccf7d3fd810e176573c7483088b6f181bbbb910160405180910390a45095945050505050565b66d529ae9e860000816001600160a01b031631108015611e5e575066d529ae9e8600004710155b156109c2576040516001600160a01b0382169060009066d529ae9e8600009082818181858883f1505050505050565b6000816005611b2281611375565b6000816005611ea981611375565b5061139c62ffffff1985166061602061232f565b6000816001611ecb81611375565b5061139c62ffffff19851660006004612281565b6000816001611eed81611375565b5061139c62ffffff1985166004602061232f565b600061130a62ffffff19831660216020612281565b6000816005611f2481611375565b5061139c6081611f4181601888901c6001600160601b0316612ddd565b600661138d565b6060600080611f608460181c6001600160601b031690565b6001600160601b031690506040519150819250611f80848360200161248b565b508181016020016040529052919050565b600054610100900460ff16611fb85760405162461bcd60e51b815260040161061f906130a0565b6106eb336115f1565b6000612016826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166125e29092919063ffffffff16565b8051909150156106b557808060200190518101906120349190612e58565b6106b55760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161061f565b600061209e826113fc565b8061130a575061130a8261143a565b60405160609060006120c284602084016125f1565b905060006120d98260181c6001600160601b031690565b6001600160601b0316905060006120ef83612681565b9184525082016020016040525092915050565b6000601882901c6001600160601b031661211e60616024613161565b81148061118b575061213260816024613161565b111592915050565b60006121468260d81c90565b64ffffffffff1664ffffffffff0361216057506000919050565b600061216b83612248565b60405110199392505050565b60008164ffffffffff1661218b8460d81c90565b64ffffffffff16149392505050565b600080601f5b600f8160ff1611156121ef5760006121b982600861318c565b60ff1685901c90506121ca81612697565b61ffff16841793508160ff166010146121e557601084901b93505b50600019016121a0565b50600f5b60ff8160ff16101561224257600061220c82600861318c565b60ff1685901c905061221d81612697565b61ffff16831792508160ff1660001461223857601083901b92505b50600019016121f3565b50915091565b600061225d8260181c6001600160601b031690565b6122708360781c6001600160601b031690565b016001600160601b03169050919050565b600061228e8260206131b5565b61229990600861318c565b60ff166122a785858561232f565b901c949350505050565b600061130a62ffffff198316826001612281565b600060d882901c60ff16600681111561130a5761130a612f32565b600061118b83836014612281565b6040516001600160a01b0383166024820152604481018290526106b590849063a9059cbb60e01b9060640161172d565b600061130a62ffffff198316604160205b60008160ff166000036123445750600061118b565b6123578460181c6001600160601b031690565b6001600160601b031661236d60ff841685613161565b11156123d1576123b86123898560781c6001600160601b031690565b6001600160601b03166123a58660181c6001600160601b031690565b6001600160601b0316858560ff166126c9565b60405162461bcd60e51b815260040161061f9190613179565b60208260ff16111561244b5760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e203332206279746573000000000000606482015260840161061f565b6008820260006124648660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b600062ffffff19808416036124f35760405162461bcd60e51b815260206004820152602860248201527f54797065644d656d566965772f636f7079546f202d204e756c6c20706f696e7460448201526732b9103232b932b360c11b606482015260840161061f565b6124fc8361213a565b61255c5760405162461bcd60e51b815260206004820152602b60248201527f54797065644d656d566965772f636f7079546f202d20496e76616c696420706f60448201526a34b73a32b9103232b932b360a91b606482015260840161061f565b60006125718460181c6001600160601b031690565b6001600160601b0316905060006125918560781c6001600160601b031690565b6001600160601b0316905060006040519050848111156125b15760206060fd5b8285848460045afa506113f26125c78760d81c90565b64ffffffffff60601b606091821b168717901b841760181b90565b60606111888484600085612737565b6000604051828111156126045760206060fd5b506000805b84518110156126715760008582815181106126265761262661314b565b6020026020010151905061263c8184870161248b565b506126508160181c6001600160601b031690565b6001600160601b031683019250508080612669906131d8565b915050612609565b50606083901b811760181b61139c565b600061268c82612868565b61130a9060206131f1565b60006126a960048360ff16901c61289d565b60ff1661ffff919091161760081b6126c08261289d565b60ff1617919050565b606060006126d68661219a565b91505060006126e48661219a565b91505060006126f28661219a565b91505060006127008661219a565b9150508383838360405160200161271a9493929190613210565b604051602081830303815290604052945050505050949350505050565b6060824710156127985760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161061f565b6001600160a01b0385163b6127ef5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161061f565b600080866001600160a01b0316858760405161280b919061303b565b60006040518083038185875af1925050503d8060008114612848576040519150601f19603f3d011682016040523d82523d6000602084013e61284d565b606091505b509150915061285d8282866129ea565b979650505050505050565b6000602061287f8360181c6001600160601b031690565b612893906001600160601b0316601f613161565b61130a91906132e7565b600060f08083179060ff821690036128b85750603092915050565b8060ff1660f1036128cc5750603192915050565b8060ff1660f2036128e05750603292915050565b8060ff1660f3036128f45750603392915050565b8060ff1660f4036129085750603492915050565b8060ff1660f50361291c5750603592915050565b8060ff1660f6036129305750603692915050565b8060ff1660f7036129445750603792915050565b8060ff1660f8036129585750603892915050565b8060ff1660f90361296c5750603992915050565b8060ff1660fa036129805750606192915050565b8060ff1660fb036129945750606292915050565b8060ff1660fc036129a85750606392915050565b8060ff1660fd036129bc5750606492915050565b8060ff1660fe036129d05750606592915050565b8060ff1660ff036129e45750606692915050565b50919050565b606083156129f957508161118b565b825115612a095782518084602001fd5b8160405162461bcd60e51b815260040161061f9190613179565b63ffffffff811681146109c257600080fd5b6001600160a01b03811681146109c257600080fd5b600080600060608486031215612a5f57600080fd5b8335612a6a81612a23565b9250602084013591506040840135612a8181612a35565b809150509250925092565b600060208284031215612a9e57600080fd5b813561118b81612a35565b60008060408385031215612abc57600080fd5b8235612ac781612a35565b91506020830135612ad781612a35565b809150509250929050565b600060208284031215612af457600080fd5b5035919050565b600060208284031215612b0d57600080fd5b813561118b81612a23565b80151581146109c257600080fd5b600080600080600060a08688031215612b3e57600080fd5b8535612b4981612a35565b9450602086013593506040860135612b6081612a23565b9250606086013591506080860135612b7781612b18565b809150509295509295909350565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715612bc457612bc4612b85565b604052919050565b600067ffffffffffffffff821115612be657612be6612b85565b50601f01601f191660200190565b60008060008060808587031215612c0a57600080fd5b8435612c1581612a23565b93506020850135612c2581612a23565b925060408501359150606085013567ffffffffffffffff811115612c4857600080fd5b8501601f81018713612c5957600080fd5b8035612c6c612c6782612bcc565b612b9b565b818152886020838501011115612c8157600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b60008060408385031215612cb657600080fd5b8235612cc181612a23565b946020939093013593505050565b60008060008060008060a08789031215612ce857600080fd5b8635612cf381612a35565b9550602087013594506040870135612d0a81612a23565b935060608701359250608087013567ffffffffffffffff80821115612d2e57600080fd5b818901915089601f830112612d4257600080fd5b813581811115612d5157600080fd5b8a6020828501011115612d6357600080fd5b6020830194508093505050509295509295509295565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b600082821015612def57612def612dc7565b500390565b600060208284031215612e0657600080fd5b815161118b81612a35565b600060208284031215612e2357600080fd5b5051919050565b60008060408385031215612e3d57600080fd5b8251612e4881612a23565b6020939093015192949293505050565b600060208284031215612e6a57600080fd5b815161118b81612b18565b60005b83811015612e90578181015183820152602001612e78565b8381111561114e5750506000910152565b600060208284031215612eb357600080fd5b815167ffffffffffffffff811115612eca57600080fd5b8201601f81018413612edb57600080fd5b8051612ee9612c6782612bcc565b818152856020838501011115612efe57600080fd5b611292826020830160208601612e75565b600060208284031215612f2157600080fd5b815160ff8116811461118b57600080fd5b634e487b7160e01b600052602160045260246000fd5b60078110612f6657634e487b7160e01b600052602160045260246000fd5b60f81b9052565b612f778186612f48565b600181019390935260218301919091526041820152606101919050565b60008151808452612fac816020860160208601612e75565b601f01601f19169290920160200192915050565b63ffffffff841681528260208201526060604082015260006112926060830184612f94565b600063ffffffff808a16835288602084015280881660408401525085606083015260018060a01b03851660808301528360a083015260e060c083015261302e60e0830184612f94565b9998505050505050505050565b6000825161304d818460208701612e75565b9190910192915050565b6130618188612f48565b8560018201528460218201528360418201528260618201526000825161308e816081850160208701612e75565b91909101608101979650505050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b85815260008551613103816020850160208a01612e75565b80830190508560208201528451613121816040840160208901612e75565b60f89490941b6001600160f81b031916604091909401908101939093525050604101949350505050565b634e487b7160e01b600052603260045260246000fd5b6000821982111561317457613174612dc7565b500190565b60208152600061118b6020830184612f94565b600060ff821660ff84168160ff04811182151516156131ad576131ad612dc7565b029392505050565b600060ff821660ff8416808210156131cf576131cf612dc7565b90039392505050565b6000600182016131ea576131ea612dc7565b5060010190565b600081600019048311821515161561320b5761320b612dc7565b500290565b7f54797065644d656d566965772f696e646578202d204f76657272616e20746865815274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b60208201526001600160d01b031960d086811b821660358401526e040eed2e8d040d8cadccee8d04060f608b1b603b840181905286821b8316604a8501527f2e20417474656d7074656420746f20696e646578206174206f666673657420306050850152600f60fb1b607085015285821b83166071850152607784015283901b166086820152601760f91b608c8201526000608d82016113f2565b60008261330457634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212200ded459275d72195bc5e42444faa0e299f5d4078e2dc770501515398ffe89d3864736f6c634300080f0033";

type BridgeRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BridgeRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BridgeRouter__factory extends ContractFactory {
  constructor(...args: BridgeRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BridgeRouter> {
    return super.deploy(overrides || {}) as Promise<BridgeRouter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BridgeRouter {
    return super.attach(address) as BridgeRouter;
  }
  override connect(signer: Signer): BridgeRouter__factory {
    return super.connect(signer) as BridgeRouter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeRouterInterface {
    return new utils.Interface(_abi) as BridgeRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeRouter {
    return new Contract(address, _abi, signerOrProvider) as BridgeRouter;
  }
}