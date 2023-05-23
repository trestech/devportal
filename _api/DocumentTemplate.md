---
layout: api_page
title: "DocumentTemplate"
description: ""
assembly_version: "1.0.15.7"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `documentTemplate` | 
| `name` | `string` | 128 |  | `documentTemplate` | 
| `description` | `string` | 512 |  | `documentTemplate` | 
| `emailSubject` | `string` | 128 |  | `documentTemplate` | 
| `emailBody` | `string` |  |  | `documentTemplate` | 
| `branch_recNo` | `long` |  | FKey | `documentTemplate` | 
| `branchName_lookup` | `string` | 64 | ReadOnly | `documentTemplate` | 
| `appUser_RecNo` | `long` |  | FKey | `documentTemplate` | 
| `activeStatus` | `bool` |  |  | `documentTemplate` | 
| `documentType` | `short` |  | Required | `documentTemplate` | Email = 1, ESign = 2
| `waiverTemplateId` | `string` | 32 |  | `documentTemplate` | 
| `documentTemplateAttachmentLink ` | table |  |  | `documentTemplate` | 
| `documentTemplate_recNo` | `long` |  | PKey, InsertOnly, FKey | `documentTemplateAttachmentLink` | 
| `attachment_recNo` | `long` |  | PKey, Auto-Assign | `documentTemplateAttachmentLink` | 
| `attachment  [shared]` | table |  | Singleton | `documentTemplateAttachmentLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `attachment` | 
| `type` | `short` |  | Required | `attachment` | Link = 1, File = 2
| `description` | `string` | 256 |  | `attachment` | 
| `fileNameLinkURL` | `string` | 256 | Required | `attachment` | 
| `fileData` | `byte[]` |  |  | `attachment` | 
| `size` | `int` |  |  | `attachment` | 
| `compressed` | `bool` |  |  | `attachment` | 
| `storeExternal` | `bool` |  |  | `attachment` | 
| `createDateTime` | `DateTimeOffset` |  | ReadOnly | `attachment` | 
| `visibility` | `short` |  | Required | `attachment` | Private = 1, Public = 2
| `directUrl` | `string` | 256 | ReadOnly | `attachment` | 
| `subType` | `short` |  | Required | `attachment` | Document = 1, Image = 2, Other = 3

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


