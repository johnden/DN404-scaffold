/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    SimpleDN404: {
      address: "0x59b670e9fA9D0A427751Af201D676719a970857b",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "name_",
              type: "string",
            },
            {
              internalType: "string",
              name: "symbol_",
              type: "string",
            },
            {
              internalType: "uint96",
              name: "initialTokenSupply",
              type: "uint96",
            },
            {
              internalType: "address",
              name: "initialSupplyOwner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AlreadyInitialized",
          type: "error",
        },
        {
          inputs: [],
          name: "ApprovalCallerNotOwnerNorApproved",
          type: "error",
        },
        {
          inputs: [],
          name: "DNAlreadyInitialized",
          type: "error",
        },
        {
          inputs: [],
          name: "FnSelectorNotRecognized",
          type: "error",
        },
        {
          inputs: [],
          name: "InsufficientAllowance",
          type: "error",
        },
        {
          inputs: [],
          name: "InsufficientBalance",
          type: "error",
        },
        {
          inputs: [],
          name: "LinkMirrorContractFailed",
          type: "error",
        },
        {
          inputs: [],
          name: "MirrorAddressIsZero",
          type: "error",
        },
        {
          inputs: [],
          name: "NewOwnerIsZeroAddress",
          type: "error",
        },
        {
          inputs: [],
          name: "NoHandoverRequest",
          type: "error",
        },
        {
          inputs: [],
          name: "SenderNotMirror",
          type: "error",
        },
        {
          inputs: [],
          name: "TokenDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "TotalSupplyOverflow",
          type: "error",
        },
        {
          inputs: [],
          name: "TransferCallerNotOwnerNorApproved",
          type: "error",
        },
        {
          inputs: [],
          name: "TransferFromIncorrectOwner",
          type: "error",
        },
        {
          inputs: [],
          name: "TransferToZeroAddress",
          type: "error",
        },
        {
          inputs: [],
          name: "Unauthorized",
          type: "error",
        },
        {
          inputs: [],
          name: "UnitIsZero",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "pendingOwner",
              type: "address",
            },
          ],
          name: "OwnershipHandoverCanceled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "pendingOwner",
              type: "address",
            },
          ],
          name: "OwnershipHandoverRequested",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "oldOwner",
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
              internalType: "address",
              name: "target",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "status",
              type: "bool",
            },
          ],
          name: "SkipNFTSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          stateMutability: "payable",
          type: "fallback",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
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
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "balanceOf",
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
          name: "cancelOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "pendingOwner",
              type: "address",
            },
          ],
          name: "completeOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "getSkipNFT",
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
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "mirrorERC721",
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
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
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
              name: "result",
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
              name: "pendingOwner",
              type: "address",
            },
          ],
          name: "ownershipHandoverExpiresAt",
          outputs: [
            {
              internalType: "uint256",
              name: "result",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "requestOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "baseURI_",
              type: "string",
            },
          ],
          name: "setBaseURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "skipNFT",
              type: "bool",
            },
          ],
          name: "setSkipNFT",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "tokenURI",
          outputs: [
            {
              internalType: "string",
              name: "result",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
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
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
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
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {
        allowance: "dn404/src/DN404.sol",
        approve: "dn404/src/DN404.sol",
        balanceOf: "dn404/src/DN404.sol",
        decimals: "dn404/src/DN404.sol",
        getSkipNFT: "dn404/src/DN404.sol",
        mirrorERC721: "dn404/src/DN404.sol",
        name: "dn404/src/DN404.sol",
        setSkipNFT: "dn404/src/DN404.sol",
        symbol: "dn404/src/DN404.sol",
        tokenURI: "dn404/src/DN404.sol",
        totalSupply: "dn404/src/DN404.sol",
        transfer: "dn404/src/DN404.sol",
        transferFrom: "dn404/src/DN404.sol",
        cancelOwnershipHandover: "solady/src/auth/Ownable.sol",
        completeOwnershipHandover: "solady/src/auth/Ownable.sol",
        owner: "solady/src/auth/Ownable.sol",
        ownershipHandoverExpiresAt: "solady/src/auth/Ownable.sol",
        renounceOwnership: "solady/src/auth/Ownable.sol",
        requestOwnershipHandover: "solady/src/auth/Ownable.sol",
        transferOwnership: "solady/src/auth/Ownable.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
