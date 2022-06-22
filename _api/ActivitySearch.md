---
layout: api_page
title: "ActivitySearch"
description: ""
---



Referenced Table: [activity](/activity)

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | activity | 
| tagValue | string | 1024 | activity | 
| summaryCount | int |  | activity | 
| type | short |  | activity | 
| appUser_recNo | long |  | activity | 
| appUserId | string | 64 | activity | 
| subject | string | 64 | activity | 
| priority | short |  | activity | 
| targetDateTime | DateTimeOffset |  | activity | 
| targetDate | Date |  | activity | 
| completionDateTime | DateTime |  | activity | 
| clientProfileRecNo | long |  | activity | 
| clientProfileName | string | 256 | activity | 
| supplierProfileRecNo | long |  | activity | 
| supplierProfileName | string | 256 | activity | 
| personRecNo | long |  | activity | 
| personName | string | 256 | activity | 
| tripRecNo | long |  | activity | 
| tripName | string | 256 | activity | 
| createDateTime | DateTimeOffset |  | activity | 
| remarks | string |  | activity | 

| Parameter | Type | Linked Parameter | Description |
| --------- | ---- | ---------------- | ----------- |
| recNo [inherited] | long |  | 
| recNoList [inherited] | long[] |  | 
| startingRow [inherited] | int |  | 
| rowCount [inherited] | int |  | 
| topRows [inherited] | int |  | 
| distinct [inherited] | bool |  | 
| includeCols [inherited] | string[] |  | 
| includeColsExtended [inherited] | [includeColsExtended[]](/includeColsExtended) |  | 
| baseUrl [inherited] | string |  | 
| tagRecNo [inherited] | long[] |  | 
| tagValueCond [inherited] | short |  | 
| tagValue [inherited] | string |  | 
| displayTagRecNo [inherited] | long |  | 
| tags [inherited] | [TagsSearch[]](/TagsSearch) |  | 
| appUserRecNo | long |  | 
| type | short[] |  | 
| targetDateFrom | Date |  | 
| targetDateTo | Date |  | 
| targetDateTimeFrom | Date |  | 
| targetDateTimeTo | Date |  | 
| completed | bool |  | 
| clientProfileRecNo | long |  | 
| supplierProfileRecNo | long |  | 
| personRecNo | long |  | 
| tripRecNo | long |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/activitySearch
Content-Type: application/json
Authorization: Bearer <session-token>
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
```

