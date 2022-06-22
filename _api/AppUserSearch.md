---
layout: api_page
title: "AppUserSearch"
description: ""
---



Referenced Table: [appUser](/appUser)

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | appUser | 
| summaryCount | int |  | appUser | 
| id | string | 64 | appUser | 
| userType | short |  | appUser | 
| branch_recNo | long |  | appUser | 
| branchName | string | 64 | appUser | 
| name | string | 64 | appUser | 
| mobilePhone | string | 64 | appUser | 
| email | string | 128 | appUser | 

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
| id | string |  | 
| branchRecNo | long |  | 
| userType | short |  | 
| name | string |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/appUserSearch
Content-Type: application/json
Authorization: Bearer <session-token>
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
```

