---
layout: api_page
title: "BranchSearch"
description: "Search branches based on filters"
assembly_version: "1.4.4.3"
---

Search branches based on filters.

See: [Branch](Branch.html)

Permission Areas: Branch

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `branch` | 
| `tagRecNo` | `long` |  | `branch` | 
| `tagName` | `string` | 64 | `branch` | 
| `tagValue` | `string` | 1024 | `branch` | 
| `summaryCount` | `int` |  | `branch` | 
| `createDateTime` | `DateTimeOffset` |  | `branch` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `branch` | 
| `name` | `string` | 64 | `branch` | 
| `description` | `string` | 128 | `branch` | 
| `activeStatus` | `short` |  | `branch` | Inactive = 0, Active = 1, Pending = 2
| `arcBspNo` | `int` |  | `branch` | 

| Parameter | Type | Linked Column | Description |
| --------- | ---- | ------------- | ----------- |
| `recNo [inherited]` | [`NumSearchParam`](NumSearchParam) | `recNo` | 
| `startingRow [inherited]` | `long` |  | 
| `rowCount [inherited]` | `long` |  | 
| `topRows [inherited]` | `long` |  | 
| `distinct [inherited]` | `bool` |  | 
| `createDateTimeFrom [inherited]` | `DateTimeUTCSearchParam` |  | 
| `createDateTimeTo [inherited]` | `DateTimeUTCSearchParam` |  | 
| `modifiedDateTimeFrom [inherited]` | `DateTimeUTCSearchParam` |  | 
| `modifiedDateTimeTo [inherited]` | `DateTimeUTCSearchParam` |  | 
| `includeCols [inherited]` | `string[]` |  | 
| `includeColsExtended [inherited]` | `includeColsExtended[]` |  | 
| `baseUrl [inherited]` | `string` |  | 
| `reportFormat [inherited]` | `bool` |  | 
| `reportName [inherited]` | `string` |  | 
| `tags [inherited]` | `TagsSearchParams[]` |  | 
| `name` | [`StringSearchParam`](StringSearchParam) | `name` | 
| `activeStatus` | [`short<short>`] | `activeStatus` | Inactive = 0, Active = 1, Pending = 2
| `arcBspNo` | [`NumSearchParam`](NumSearchParam) | `arcBspNo` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request: Branches with names that start with `P`.
```sh
POST https://api-dev.trestechnologies.com/branchSearch
Content-Type: application/json
Authorization: Bearer <session-token>
{
  "name": {
    "compareCondition": 5,
    "value": [
      "P"
    ]
  }
}
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
[
  {
    "recNo": 7715,
    "createDateTime": "2023-08-09T12:02:09-07:00",
    "lastModifiedDateTime": "2023-08-09T12:04:07-07:00",
    "name": "Peeps About"
  }
]
```

