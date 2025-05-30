---
layout: api_page
title: "Destination"
description: ""
assembly_version: "1.4.15.6"
---



Permission Areas: Destination

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `destination` | 
| `name` | `string` | 64 | Required | `destination` | 
| `country` | `string` | 4 |  | `destination` | 
| `region_recNo` | `long` |  | FKey | `destination` | 
| `destinationAttachmentLink ` | table |  |  | `destination` | 
| `destination_recNo` | `long` |  | PKey, InsertOnly, FKey | `destinationAttachmentLink` | 
| `attachment_recNo` | `long` |  | PKey, Auto-Assign | `destinationAttachmentLink` | 
| `sortIndex` | `short` |  |  | `destinationAttachmentLink` | 
| `destinationAttachment  [shared]` | table |  | Singleton | `destinationAttachmentLink` | 
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
| `destinationTag ` | table |  |  | `destination` | 
| `recNo` | `long` |  | PKey | `destinationTag` | 
| `destination_recNo` | `long` |  | InsertOnly, FKey | `destinationTag` | 
| `tag_recNo` | `long` |  | Required, FKey | `destinationTag` | 
| `name` | `string` | 64 | ReadOnly | `destinationTag` | 
| `value` | `string` | 1024 |  | `destinationTag` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


