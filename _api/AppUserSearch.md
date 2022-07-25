---
layout: api_page
title: "AppUserSearch"
description: ""
---



Referenced Table: [AppUser]({{ '/api/AppUser.html' | relative_url }})

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | appUser | 
| summaryCount | int |  | appUser | 
| id | string | 64 | appUser | 
| userType | short |  | appUser | User = 1, Manager = 2, Admin = 3
| branch_recNo | long |  | appUser | 
| branchName | string | 64 | appUser | 
| name | string | 64 | appUser | 
| mobilePhone | string | 64 | appUser | 
| email | string | 128 | appUser | 

| Parameter | Type | Linked Column | Linked Parameter | Description |
| --------- | ---- | ------------- | ---------------- | ----------- |
| recNo [inherited] | long |  |  | 
| recNoList [inherited] | long[] |  |  | 
| startingRow [inherited] | int |  |  | 
| rowCount [inherited] | int |  |  | 
| topRows [inherited] | int |  |  | 
| distinct [inherited] | bool |  |  | 
| includeCols [inherited] | string[] |  |  | 
| includeColsExtended [inherited] | includeColsExtended[] |  |  | 
| baseUrl [inherited] | string |  |  | 
| id | string | id |  | 
| branchRecNo | long | branch_recNo |  | 
| userType | long | userType |  | 
| name | string | name |  | 
| email | string | email |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


