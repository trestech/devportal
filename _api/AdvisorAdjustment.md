---
layout: api_page
title: "AdvisorAdjustment"
description: ""
assembly_version: "1.4.15.6"
---



Permission Areas: AdvisorAdjustment

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `advisorAdjustment` | 
| `advisorProfile_recNo` | `long` |  | Required, FKey | `advisorAdjustment` | 
| `advisorProfile_nameLookup` | `string` | 256 | ReadOnly | `advisorAdjustment` | 
| `adjustmentDate` | `Date` |  | Required | `advisorAdjustment` | 
| `amount` | `long` |  | Required | `advisorAdjustment` | 
| `description` | `string` | 128 |  | `advisorAdjustment` | 
| `remarks` | `string` | 512 |  | `advisorAdjustment` | 
| `reconciliationRecNo` | `long` |  | ReadOnly, Lookup | `advisorAdjustment` | 
| `reconciliationDate` | `Date` |  | ReadOnly, Lookup | `advisorAdjustment` | 
| `advisorAdjustmentTag ` | table |  |  | `advisorAdjustment` | 
| `recNo` | `long` |  | PKey | `advisorAdjustmentTag` | 
| `advisorAdjustment_recNo` | `long` |  | InsertOnly, FKey | `advisorAdjustmentTag` | 
| `tag_recNo` | `long` |  | Required, FKey | `advisorAdjustmentTag` | 
| `name` | `string` | 64 | ReadOnly | `advisorAdjustmentTag` | 
| `value` | `string` | 1024 |  | `advisorAdjustmentTag` | 
| `advisorAdjustmentAttachmentLink ` | table |  |  | `advisorAdjustment` | 
| `advisorAdjustment_recNo` | `long` |  | PKey, InsertOnly, FKey | `advisorAdjustmentAttachmentLink` | 
| `attachment_recNo` | `long` |  | PKey, Auto-Assign | `advisorAdjustmentAttachmentLink` | 
| `advisorAdjustmentAttachment  [shared]` | table |  | Singleton | `advisorAdjustmentAttachmentLink` | 
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

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


