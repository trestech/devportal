---
layout: api_page
title: "DocumentTemplate"
description: ""
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `DocumentTemplate` | 
| `name` | `string` | 128 |  | `DocumentTemplate` | 
| `description` | `string` | 512 |  | `DocumentTemplate` | 
| `emailSubject` | `string` | 128 |  | `DocumentTemplate` | 
| `emailBody` | `string` |  |  | `DocumentTemplate` | 
| `branch_recNo` | `long` |  | FKey | `DocumentTemplate` | 
| `branchName_lookup` | `string` | 64 | ReadOnly | `DocumentTemplate` | 
| `appUser_RecNo` | `long` |  | FKey | `DocumentTemplate` | 
| `activeStatus` | `bool` |  |  | `DocumentTemplate` | 
| `documentTemplateAttachmentLink ` | table |  |  | `DocumentTemplate` | 
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

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


