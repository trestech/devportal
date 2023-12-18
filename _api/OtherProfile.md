---
layout: api_page
title: "OtherProfile"
description: ""
assembly_version: "1.0.30.6"
---



Permission Areas: OtherProfile

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `generalLedgerAccount_recNo` | `long` |  | FKey | `otherProfile` | 
| `generalLedgerAccount_name` | `string` | 64 | ReadOnly | `otherProfile` | 
| `profile_recNo` | `long` |  | PKey, Auto-Assign | `otherProfile` | 
| `profile  [shared]` | table |  | Singleton | `otherProfile` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `profile` | 
| `name` | `string` | 256 |  | `profile` | 
| `activeStatus` | `short` |  | Required | `profile` | Inactive = 0, Active = 1, Pending = 2
| `uniqueId` | `string` | 64 | InsertOnly | `profile` | 
| `remarks` | `string` |  |  | `profile` | 
| `accountingReference` | `string` | 64 |  | `profile` | 
| `permitMarketing` | `bool` |  |  | `profile` | 
| `createDateTime` | `DateTimeOffset` |  | ReadOnly, Lookup | `profile` | 
| `profilePersonLink ` | table |  |  | `profile` | 
| `person_recNo` | `long` |  | PKey, Required, FKey | `profilePersonLink` | 
| `profile_recNo` | `long` |  | PKey, InsertOnly, FKey | `profilePersonLink` | 
| `role` | `string` | 64 |  | `profilePersonLink` | 
| `isPrimary` | `bool` |  |  | `profilePersonLink` | 
| `name` | `string` | 256 | ReadOnly, Lookup | `profilePersonLink` | 
| `primaryPhone` | `string` | 256 | ReadOnly, Lookup | `profilePersonLink` | 
| `primaryEmail` | `string` | 256 | ReadOnly, Lookup | `profilePersonLink` | 
| `department` | `string` | 64 |  | `profilePersonLink` | 
| `birthdayDay` | `short` |  | ReadOnly, Lookup | `profilePersonLink` | 
| `birthdayMonth` | `short` |  | ReadOnly, Lookup | `profilePersonLink` | 
| `birthdayYear` | `short` |  | ReadOnly, Lookup | `profilePersonLink` | 
| `profileCommunicationLink ` | table |  |  | `profile` | 
| `profile_recNo` | `long` |  | PKey, InsertOnly, FKey | `profileCommunicationLink` | 
| `communication_recNo` | `long` |  | PKey, Auto-Assign | `profileCommunicationLink` | 
| `communication  [shared]` | table |  | Singleton | `profileCommunicationLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `communication` | 
| `type` | `short` |  | Required | `communication` | Phone = 1, Email = 2, SocialMedia = 3, Web = 4
| `subType` | `string` | 32 |  | `communication` | 
| `value` | `string` | 256 |  | `communication` | 
| `countryDomain` | `string` | 64 |  | `communication` | 
| `cityArea` | `string` | 4 |  | `communication` | 
| `userSpecific` | `string` | 64 |  | `communication` | 
| `description` | `string` | 64 |  | `communication` | 
| `isPrimary` | `bool` |  |  | `communication` | 
| `permitMarketing` | `bool` |  |  | `communication` | 
| `isBillingContact` | `bool` |  | Deprecated | `communication` | IsBillingContact is deprecated. Use contactOptions instead.
| `contactOption` | `short` |  |  | `communication` | Billing = 1, CustomerService = 2
| `profileAddressLink ` | table |  |  | `profile` | 
| `profile_recNo` | `long` |  | PKey, InsertOnly, FKey | `profileAddressLink` | 
| `addressType` | `short` |  | PKey, Required | `profileAddressLink` | Physical = 1, Mailing = 2
| `permitMarketing` | `bool` |  |  | `profileAddressLink` | 
| `address_recNo` | `long` |  | PKey, Auto-Assign | `profileAddressLink` | 
| `address  [shared]` | table |  | Singleton | `profileAddressLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `address` | 
| `street1` | `string` | 128 |  | `address` | 
| `street2` | `string` | 128 |  | `address` | 
| `street3` | `string` | 128 |  | `address` | 
| `city` | `string` | 64 |  | `address` | 
| `county` | `string` | 64 |  | `address` | 
| `stateProvince` | `string` | 8 |  | `address` | 
| `zipPostalCode` | `string` | 16 |  | `address` | 
| `country` | `string` | 4 |  | `address` | 
| `countryName` | `string` | 64 |  | `address` | 
| `permitMarketing` | `bool` |  |  | `address` | 
| `profileId ` | table |  |  | `profile` | 
| `recNo` | `long` |  | PKey | `profileId` | 
| `profile_recNo` | `long` |  | InsertOnly, FKey | `profileId` | 
| `id` | `string` | 32 | Required | `profileId` | 
| `profileAttachmentLink ` | table |  |  | `profile` | 
| `profile_recNo` | `long` |  | PKey, InsertOnly, FKey | `profileAttachmentLink` | 
| `attachment_recNo` | `long` |  | PKey, Auto-Assign | `profileAttachmentLink` | 
| `attachment  [shared]` | table |  | Singleton | `profileAttachmentLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `attachment` | 
| `type` | `short` |  | Required | `attachment` | Link = 1, File = 2
| `description` | `string` | 256 |  | `attachment` | 
| `fileNameLinkURL` | `string` | 256 | Required | `attachment` | 
| `fileData` | `byte[]` |  |  | `attachment` | 
| `size` | `int` |  |  | `attachment` | 
| `compressed` | `bool` |  |  | `attachment` | 
| `storeExternal` | `short` |  |  | `attachment` | Database = 0, PrivateStorage = 1, PublicStorage = 2
| `createDateTime` | `DateTimeOffset` |  | ReadOnly, Lookup | `attachment` | 
| `visibility` | `short` |  | Required | `attachment` | Public = 1, Private = 2, Internal = 3
| `directUrl` | `string` | 256 | ReadOnly | `attachment` | 
| `subType` | `short` |  | Required | `attachment` | Document = 1, Image = 2, Other = 3
| `profileTag ` | table |  |  | `profile` | 
| `recNo` | `long` |  | PKey | `profileTag` | 
| `profile_recNo` | `long` |  | InsertOnly, FKey | `profileTag` | 
| `tag_recNo` | `long` |  | Required, FKey | `profileTag` | 
| `name` | `string` | 64 | ReadOnly | `profileTag` | 
| `value` | `string` | 1024 |  | `profileTag` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


