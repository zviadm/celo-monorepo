# Class: IdentityMetadataWrapper

## Hierarchy

* **IdentityMetadataWrapper**

## Index

### Constructors

* [constructor](_contractkit_src_identity_metadata_.identitymetadatawrapper.md#constructor)

### Properties

* [data](_contractkit_src_identity_metadata_.identitymetadatawrapper.md#data)

### Accessors

* [claims](_contractkit_src_identity_metadata_.identitymetadatawrapper.md#claims)

### Methods

* [addClaim](_contractkit_src_identity_metadata_.identitymetadatawrapper.md#addclaim)
* [filterClaims](_contractkit_src_identity_metadata_.identitymetadatawrapper.md#filterclaims)
* [findClaim](_contractkit_src_identity_metadata_.identitymetadatawrapper.md#findclaim)
* [hashOfClaims](_contractkit_src_identity_metadata_.identitymetadatawrapper.md#hashofclaims)
* [toString](_contractkit_src_identity_metadata_.identitymetadatawrapper.md#tostring)
* [fetchFromURL](_contractkit_src_identity_metadata_.identitymetadatawrapper.md#static-fetchfromurl)
* [fromEmpty](_contractkit_src_identity_metadata_.identitymetadatawrapper.md#static-fromempty)
* [fromFile](_contractkit_src_identity_metadata_.identitymetadatawrapper.md#static-fromfile)
* [fromRawString](_contractkit_src_identity_metadata_.identitymetadatawrapper.md#static-fromrawstring)
* [verifySigner](_contractkit_src_identity_metadata_.identitymetadatawrapper.md#static-verifysigner)

## Constructors

###  constructor

\+ **new IdentityMetadataWrapper**(`data`: [IdentityMetadata](../modules/_contractkit_src_identity_metadata_.md#identitymetadata)): *[IdentityMetadataWrapper](_contractkit_src_identity_metadata_.identitymetadatawrapper.md)*

*Defined in [contractkit/src/identity/metadata.ts:105](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [IdentityMetadata](../modules/_contractkit_src_identity_metadata_.md#identitymetadata) |

**Returns:** *[IdentityMetadataWrapper](_contractkit_src_identity_metadata_.identitymetadatawrapper.md)*

## Properties

###  data

• **data**: *[IdentityMetadata](../modules/_contractkit_src_identity_metadata_.md#identitymetadata)*

*Defined in [contractkit/src/identity/metadata.ts:27](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L27)*

## Accessors

###  claims

• **get claims**(): *object | object | object | object | object[]*

*Defined in [contractkit/src/identity/metadata.ts:111](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L111)*

**Returns:** *object | object | object | object | object[]*

## Methods

###  addClaim

▸ **addClaim**(`claim`: [Claim](../modules/_contractkit_src_identity_claims_claim_.md#claim), `signer`: Signer): *Promise‹object | object | object | object | object›*

*Defined in [contractkit/src/identity/metadata.ts:126](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`claim` | [Claim](../modules/_contractkit_src_identity_claims_claim_.md#claim) |
`signer` | Signer |

**Returns:** *Promise‹object | object | object | object | object›*

___

###  filterClaims

▸ **filterClaims**<**K**>(`type`: K): *Array‹[ClaimPayload](../modules/_contractkit_src_identity_claims_claim_.md#claimpayload)‹K››*

*Defined in [contractkit/src/identity/metadata.ts:158](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L158)*

**Type parameters:**

▪ **K**: *[ClaimTypes](../enums/_contractkit_src_identity_claims_types_.claimtypes.md)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | K |

**Returns:** *Array‹[ClaimPayload](../modules/_contractkit_src_identity_claims_claim_.md#claimpayload)‹K››*

___

###  findClaim

▸ **findClaim**<**K**>(`type`: K): *[ClaimPayload](../modules/_contractkit_src_identity_claims_claim_.md#claimpayload)‹K› | undefined*

*Defined in [contractkit/src/identity/metadata.ts:154](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L154)*

**Type parameters:**

▪ **K**: *[ClaimTypes](../enums/_contractkit_src_identity_claims_types_.claimtypes.md)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | K |

**Returns:** *[ClaimPayload](../modules/_contractkit_src_identity_claims_claim_.md#claimpayload)‹K› | undefined*

___

###  hashOfClaims

▸ **hashOfClaims**(): *string*

*Defined in [contractkit/src/identity/metadata.ts:115](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L115)*

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Defined in [contractkit/src/identity/metadata.ts:119](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L119)*

**Returns:** *string*

___

### `Static` fetchFromURL

▸ **fetchFromURL**(`kit`: [ContractKit](_contractkit_src_kit_.contractkit.md), `url`: string): *Promise‹[IdentityMetadataWrapper](_contractkit_src_identity_metadata_.identitymetadatawrapper.md)‹››*

*Defined in [contractkit/src/identity/metadata.ts:39](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`kit` | [ContractKit](_contractkit_src_kit_.contractkit.md) |
`url` | string |

**Returns:** *Promise‹[IdentityMetadataWrapper](_contractkit_src_identity_metadata_.identitymetadatawrapper.md)‹››*

___

### `Static` fromEmpty

▸ **fromEmpty**(`address`: string): *[IdentityMetadataWrapper](_contractkit_src_identity_metadata_.identitymetadatawrapper.md)‹›*

*Defined in [contractkit/src/identity/metadata.ts:29](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *[IdentityMetadataWrapper](_contractkit_src_identity_metadata_.identitymetadatawrapper.md)‹›*

___

### `Static` fromFile

▸ **fromFile**(`kit`: [ContractKit](_contractkit_src_kit_.contractkit.md), `path`: string): *Promise‹[IdentityMetadataWrapper](_contractkit_src_identity_metadata_.identitymetadatawrapper.md)‹››*

*Defined in [contractkit/src/identity/metadata.ts:47](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`kit` | [ContractKit](_contractkit_src_kit_.contractkit.md) |
`path` | string |

**Returns:** *Promise‹[IdentityMetadataWrapper](_contractkit_src_identity_metadata_.identitymetadatawrapper.md)‹››*

___

### `Static` fromRawString

▸ **fromRawString**(`kit`: [ContractKit](_contractkit_src_kit_.contractkit.md), `rawData`: string): *Promise‹[IdentityMetadataWrapper](_contractkit_src_identity_metadata_.identitymetadatawrapper.md)‹››*

*Defined in [contractkit/src/identity/metadata.ts:69](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`kit` | [ContractKit](_contractkit_src_kit_.contractkit.md) |
`rawData` | string |

**Returns:** *Promise‹[IdentityMetadataWrapper](_contractkit_src_identity_metadata_.identitymetadatawrapper.md)‹››*

___

### `Static` verifySigner

▸ **verifySigner**(`kit`: [ContractKit](_contractkit_src_kit_.contractkit.md), `hash`: any, `signature`: any, `metadata`: any): *Promise‹boolean›*

*Defined in [contractkit/src/identity/metadata.ts:51](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`kit` | [ContractKit](_contractkit_src_kit_.contractkit.md) |
`hash` | any |
`signature` | any |
`metadata` | any |

**Returns:** *Promise‹boolean›*
