---
layout: api_page
title: "AppSettingSearch"
description: ""
---



Referenced Table: [AppSetting]({{ '/api/AppSetting.html' | relative_url }})

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | appSetting | 
| summaryCount | int |  | appSetting | 
| appUser_recNo | long |  | appSetting | 
| area | string | 64 | appSetting | 
| name | string | 64 | appSetting | 
| description | string | 64 | appSetting | 
| data | string |  | appSetting | 
| userType | short |  | appSetting | User = 1, Manager = 2, Admin = 3

| Parameter | Type | Linked Parameter | Description |
| --------- | ---- | ---------------- | ----------- |
| recNo [inherited] | long |  | 
| recNoList [inherited] | long[] |  | 
| startingRow [inherited] | int |  | 
| rowCount [inherited] | int |  | 
| topRows [inherited] | int |  | 
| distinct [inherited] | bool |  | 
| includeCols [inherited] | string[] |  | 
| includeColsExtended [inherited] | includeColsExtended[] |  | 
| baseUrl [inherited] | string |  | 
| area | string |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/appSettingSearch
Content-Type: application/json
Authorization: Bearer <session-token>
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
```

