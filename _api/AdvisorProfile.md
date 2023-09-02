---
layout: api_page
title: "AdvisorProfile"
description: ""
assembly_version: "1.0.23.2"
---



Permission Areas: AdvisorProfile

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `profile_recNo` | `long` |  | PKey, Auto-Assign | `advisorProfile` | 
| `type` | `short` |  | Required | `advisorProfile` | Inside = 1, Outside = 2
| `logoData` | `byte[]` |  |  | `advisorProfile` | 
| `addressPrintOption` | `short` |  | Required | `advisorProfile` | UseAdvisorAddress = 1, UseBranchAddress = 2, UseAgencyAddress = 3, NoAddress = 4
| `photoAttachment_recNo` | `long` |  | Auto-Assign | `advisorProfile` | 
| `logoAttachment_recNo` | `long` |  | Auto-Assign | `advisorProfile` | 
| `brandingColor` | `int` |  |  | `advisorProfile` | 
| `brandingName` | `string` | 64 |  | `advisorProfile` | 
| `profile  [shared]` | table |  | Singleton | `advisorProfile` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `profile` | 
| `name` | `string` | 256 |  | `profile` | 
| `activeStatus` | `short` |  | Required | `profile` | Inactive = 0, Active = 1, Pending = 2
| `uniqueId` | `string` | 64 | InsertOnly | `profile` | 
| `remarks` | `string` |  |  | `profile` | 
| `accountingReference` | `string` | 64 |  | `profile` | 
| `permitMarketing` | `bool` |  |  | `profile` | 
| `createDateTime` | `DateTimeOffset` |  | ReadOnly | `profile` | 
| `profilePersonLink ` | table |  |  | `profile` | 
| `person_recNo` | `long` |  | PKey, Required, FKey | `profilePersonLink` | 
| `profile_recNo` | `long` |  | PKey, InsertOnly, FKey | `profilePersonLink` | 
| `role` | `string` | 64 |  | `profilePersonLink` | 
| `isPrimary` | `bool` |  |  | `profilePersonLink` | 
| `name` | `string` | 256 | ReadOnly | `profilePersonLink` | 
| `primaryPhone` | `string` | 256 | ReadOnly | `profilePersonLink` | 
| `primaryEmail` | `string` | 256 | ReadOnly | `profilePersonLink` | 
| `department` | `string` | 64 |  | `profilePersonLink` | 
| `birthdayDay` | `short` |  | ReadOnly | `profilePersonLink` | 
| `birthdayMonth` | `short` |  | ReadOnly | `profilePersonLink` | 
| `birthdayYear` | `short` |  | ReadOnly | `profilePersonLink` | 
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
| `storeExternal` | `bool` |  |  | `attachment` | 
| `createDateTime` | `DateTimeOffset` |  | ReadOnly | `attachment` | 
| `visibility` | `short` |  | Required | `attachment` | Public = 1, Private = 2, Internal = 3
| `directUrl` | `string` | 256 | ReadOnly | `attachment` | 
| `subType` | `short` |  | Required | `attachment` | Document = 1, Image = 2, Other = 3
| `profileTag ` | table |  |  | `profile` | 
| `recNo` | `long` |  | PKey | `profileTag` | 
| `profile_recNo` | `long` |  | InsertOnly, FKey | `profileTag` | 
| `tag_recNo` | `long` |  | Required, FKey | `profileTag` | 
| `name` | `string` | 64 | ReadOnly | `profileTag` | 
| `value` | `string` | 1024 |  | `profileTag` | 
| `photoAttachment  [shared]` | table |  | Singleton | `advisorProfile` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `attachment` | 
| `type` | `short` |  | Required | `attachment` | Link = 1, File = 2
| `description` | `string` | 256 |  | `attachment` | 
| `fileNameLinkURL` | `string` | 256 | Required | `attachment` | 
| `fileData` | `byte[]` |  |  | `attachment` | 
| `size` | `int` |  |  | `attachment` | 
| `compressed` | `bool` |  |  | `attachment` | 
| `storeExternal` | `bool` |  |  | `attachment` | 
| `createDateTime` | `DateTimeOffset` |  | ReadOnly | `attachment` | 
| `visibility` | `short` |  | Required | `attachment` | Public = 1, Private = 2, Internal = 3
| `directUrl` | `string` | 256 | ReadOnly | `attachment` | 
| `subType` | `short` |  | Required | `attachment` | Document = 1, Image = 2, Other = 3
| `logoAttachment  [shared]` | table |  | Singleton | `advisorProfile` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `attachment` | 
| `type` | `short` |  | Required | `attachment` | Link = 1, File = 2
| `description` | `string` | 256 |  | `attachment` | 
| `fileNameLinkURL` | `string` | 256 | Required | `attachment` | 
| `fileData` | `byte[]` |  |  | `attachment` | 
| `size` | `int` |  |  | `attachment` | 
| `compressed` | `bool` |  |  | `attachment` | 
| `storeExternal` | `bool` |  |  | `attachment` | 
| `createDateTime` | `DateTimeOffset` |  | ReadOnly | `attachment` | 
| `visibility` | `short` |  | Required | `attachment` | Public = 1, Private = 2, Internal = 3
| `directUrl` | `string` | 256 | ReadOnly | `attachment` | 
| `subType` | `short` |  | Required | `attachment` | Document = 1, Image = 2, Other = 3
| `advisorCommissionRate ` | table |  |  | `advisorProfile` | 
| `advisorProfile_recNo` | `long` |  | PKey, InsertOnly, FKey | `advisorCommissionRate` | 
| `travelCategory_recNo` | `short` |  | PKey | `advisorCommissionRate` | Air = 1, Hotel = 2, Car = 3, Cruise = 4, Tour = 5, Rail = 6, Transfer = 7, Insurance = 8, ServiceFee = 9, Excursion = 10, ClientVoucher = 11, GiftCertificate = 12, SupplierVoucher = 13, Misc = 99
| `commissionRate` | `short` |  |  | `advisorCommissionRate` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


