---
layout: api_page
title: "DestinationSearch"
description: ""
---



Referenced Table: [Destination]({{ '/api/Destination.html' | relative_url }})

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | destination | 
| summaryCount | int |  | destination | 
| name | string | 64 | destination | 
| country | string | 4 | destination | 
| regionRecNo | long |  | destination | 
| regionName | string | 64 | destination | 

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
| name | string |  | 
| country | string[] |  | 
| regionRecNo | short[] |  | UnitedStates = 1, Canada = 2, MexicoCentralAmerica = 3, BermudaCaribbean = 4, SouthAmericaAntarctica = 5, Europe = 6, EgyptMiddleEast = 7, Africa = 8, AustraliaNewZealand = 9, Asia = 10, SouthPacific = 11

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/destinationSearch
Content-Type: application/json
Authorization: Bearer <session-token>
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
```

