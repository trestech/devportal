---
layout: api_page
title: "SupplierProfile"
description: ""
---



Permission Areas: SupplierProfile

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `profile_recNo` | `long` |  | PKey, Auto-Assign | `supplierProfile` | 
| `type` | `short` |  | Required | `supplierProfile` | BillingAndServiceProvider = 1, BillingProvider = 2, ServiceProvider = 3
| `preferred` | `bool` |  | Required | `supplierProfile` | 
| `airlineNo` | `short` |  |  | `supplierProfile` | 
| `commissionTriggerIndex` | `short` |  |  | `supplierProfile` | BookingDate = 1, DepartDate = 2, ReturnDate = 3, FinalPayDate = 4
| `commissionTriggerDaysOffset` | `short` |  |  | `supplierProfile` | 
| `vendorId` | `string` | 10 |  | `supplierProfile` | 
| `tripStatementRemarks` | `string` |  |  | `supplierProfile` | 
| `termsAndConditionsUrl` | `string` | 256 |  | `supplierProfile` | 
| `commissionRate` | `short` |  |  | `supplierProfile` | 
| `travelCategoryFlags` | `int` |  |  | `supplierProfile` | 
| `profile  [shared]` | table |  | Singleton | `supplierProfile` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `profile` | 
| `name` | `string` | 256 |  | `profile` | 
| `activeStatus` | `bool` |  |  | `profile` | 
| `uniqueId` | `string` | 64 | InsertOnly | `profile` | 
| `remarks` | `string` |  |  | `profile` | 
| `accountingReference` | `string` | 64 |  | `profile` | 
| `permitMarketing` | `bool` |  |  | `profile` | 
| `profilePersonLink ` | table |  |  | `profile` | 
| `person_recNo` | `long` |  | PKey, Required, FKey | `profilePersonLink` | 
| `profile_recNo` | `long` |  | PKey, InsertOnly, FKey | `profilePersonLink` | 
| `role` | `string` | 64 |  | `profilePersonLink` | 
| `isPrimary` | `bool` |  |  | `profilePersonLink` | 
| `name` | `string` | 256 | ReadOnly | `profilePersonLink` | 
| `primaryPhone` | `string` | 256 | ReadOnly | `profilePersonLink` | 
| `primaryEmail` | `string` | 256 | ReadOnly | `profilePersonLink` | 
| `department` | `string` | 64 |  | `profilePersonLink` | 
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


