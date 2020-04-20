# External module: "contractkit/src/utils/signing-utils"

## Index

### Interfaces

* [RLPEncodedTx](../interfaces/_contractkit_src_utils_signing_utils_.rlpencodedtx.md)

### Functions

* [chainIdTransformationForSigning](_contractkit_src_utils_signing_utils_.md#chainidtransformationforsigning)
* [encodeTransaction](_contractkit_src_utils_signing_utils_.md#encodetransaction)
* [getHashFromEncoded](_contractkit_src_utils_signing_utils_.md#gethashfromencoded)
* [recoverMessageSigner](_contractkit_src_utils_signing_utils_.md#recovermessagesigner)
* [recoverTransaction](_contractkit_src_utils_signing_utils_.md#recovertransaction)
* [rlpEncodedTx](_contractkit_src_utils_signing_utils_.md#rlpencodedtx)
* [verifyEIP712TypedDataSigner](_contractkit_src_utils_signing_utils_.md#verifyeip712typeddatasigner)

## Functions

###  chainIdTransformationForSigning

▸ **chainIdTransformationForSigning**(`chainId`: number): *number*

*Defined in [contractkit/src/utils/signing-utils.ts:27](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signing-utils.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`chainId` | number |

**Returns:** *number*

___

###  encodeTransaction

▸ **encodeTransaction**(`rlpEncoded`: [RLPEncodedTx](../interfaces/_contractkit_src_utils_signing_utils_.rlpencodedtx.md), `signature`: object): *Promise‹EncodedTransaction›*

*Defined in [contractkit/src/utils/signing-utils.ts:94](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signing-utils.ts#L94)*

**Parameters:**

▪ **rlpEncoded**: *[RLPEncodedTx](../interfaces/_contractkit_src_utils_signing_utils_.rlpencodedtx.md)*

▪ **signature**: *object*

Name | Type |
------ | ------ |
`r` | Buffer |
`s` | Buffer |
`v` | number |

**Returns:** *Promise‹EncodedTransaction›*

___

###  getHashFromEncoded

▸ **getHashFromEncoded**(`rlpEncode`: string): *string*

*Defined in [contractkit/src/utils/signing-utils.ts:31](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signing-utils.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`rlpEncode` | string |

**Returns:** *string*

___

###  recoverMessageSigner

▸ **recoverMessageSigner**(`signingDataHex`: string, `signedData`: string): *string*

*Defined in [contractkit/src/utils/signing-utils.ts:155](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signing-utils.ts#L155)*

**Parameters:**

Name | Type |
------ | ------ |
`signingDataHex` | string |
`signedData` | string |

**Returns:** *string*

___

###  recoverTransaction

▸ **recoverTransaction**(`rawTx`: string): *[Tx, string]*

*Defined in [contractkit/src/utils/signing-utils.ts:129](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signing-utils.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`rawTx` | string |

**Returns:** *[Tx, string]*

___

###  rlpEncodedTx

▸ **rlpEncodedTx**(`tx`: Tx): *[RLPEncodedTx](../interfaces/_contractkit_src_utils_signing_utils_.rlpencodedtx.md)*

*Defined in [contractkit/src/utils/signing-utils.ts:43](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signing-utils.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`tx` | Tx |

**Returns:** *[RLPEncodedTx](../interfaces/_contractkit_src_utils_signing_utils_.rlpencodedtx.md)*

___

###  verifyEIP712TypedDataSigner

▸ **verifyEIP712TypedDataSigner**(`typedData`: [EIP712TypedData](../interfaces/_contractkit_src_utils_sign_typed_data_utils_.eip712typeddata.md), `signedData`: string, `expectedAddress`: string): *boolean*

*Defined in [contractkit/src/utils/signing-utils.ts:165](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signing-utils.ts#L165)*

**Parameters:**

Name | Type |
------ | ------ |
`typedData` | [EIP712TypedData](../interfaces/_contractkit_src_utils_sign_typed_data_utils_.eip712typeddata.md) |
`signedData` | string |
`expectedAddress` | string |

**Returns:** *boolean*
