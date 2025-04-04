---
layout: api_page
title: "Branch"
description: "A branch is often a separate location or office of a travel agency that uses the same data source as the main agency"
assembly_version: "1.4.14.9"
---

A branch is often a separate location or office of a travel agency that uses the same data source as the main agency.  A branch can have its own trust account, accounting data, and reporting functions and can also share information and workflows with other branches and the main agency.

Permission Areas: Branch

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `branch` | 
| `name` | `string` | 64 |  | `branch` | 
| `description` | `string` | 128 |  | `branch` | 
| `phone` | `string` | 256 |  | `branch` | 
| `email` | `string` | 256 |  | `branch` | 
| `street1` | `string` | 128 |  | `branch` | 
| `street2` | `string` | 128 |  | `branch` | 
| `city` | `string` | 64 |  | `branch` | 
| `stateProvince` | `string` | 8 |  | `branch` | 
| `zipPostalCode` | `string` | 16 |  | `branch` | 
| `country` | `string` | 4 |  | `branch` | 
| `headerInfo` | `string` | 512 |  | `branch` | 
| `logoData` | `byte[]` |  |  | `branch` | 
| `itineraryRemarks` | `string` |  |  | `branch` | 
| `brandingColor` | `int` |  |  | `branch` | 
| `activeStatus` | `short` |  | Required | `branch` | Inactive = 0, Active = 1, Pending = 2
| `arcBspNo` | `int` |  |  | `branch` | 
| `logoAttachment_recNo` | `long` |  | Auto-Assign | `branch` | 
| `logoAttachment  [shared]` | table |  | Singleton | `branch` | 
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
| `branchTag ` | table |  |  | `branch` | 
| `recNo` | `long` |  | PKey | `branchTag` | 
| `branch_recNo` | `long` |  | InsertOnly, FKey | `branchTag` | 
| `tag_recNo` | `long` |  | Required, FKey | `branchTag` | 
| `name` | `string` | 64 | ReadOnly | `branchTag` | 
| `value` | `string` | 1024 |  | `branchTag` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request: Load the branch information for the record specified.
```sh
GET https://api-dev.trestechnologies.com/branch/7715
Content-Type: application/json
Authorization: Bearer <session-token>
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
[
  {
    "recNo": 7715,
    "name": "Peeps About",
    "email": "dario.gianikas@example.com",
    "logoData": ""
  }
]
```

