---
layout: api_page
title: "AppSettingSearch"
description: "Search application settings based on filters"
assembly_version: "1.4.14.9"
---

Search application settings based on filters.

See: [AppSetting](AppSetting.html)

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `appSetting` | 
| `summaryCount` | `int` |  | `appSetting` | 
| `createDateTime` | `DateTimeOffset` |  | `appSetting` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `appSetting` | 
| `appUser_recNo` | `long` |  | `appSetting` | 
| `area` | `string` | 64 | `appSetting` | 
| `name` | `string` | 64 | `appSetting` | 
| `description` | `string` | 64 | `appSetting` | 
| `data` | `string` |  | `appSetting` | 
| `userType` | `short` |  | `appSetting` | User = 1, Manager = 2, Admin = 3

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
| `appUserRecNo` | `long` | `appUser_recNo` | 
| `area` | `string` | `area` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request: Search filtering on area: tripSearch.
```sh
POST https://api-dev.trestechnologies.com/appSettingSearch
Content-Type: application/json
Authorization: Bearer <session-token>
{
  "area": "tripSearch"
}
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
[
  {
    "recNo": 737,
    "createDateTime": "2023-08-29T09:33:27-07:00",
    "lastModifiedDateTime": "2023-08-29T09:33:27-07:00",
    "area": "tripSearch",
    "name": "Trip View",
    "data": "{\"recNo\":null,\"name\":\"Trip View\",\"orderId\":1,\"isDefault\":null,\"isSelected\":true,\"isMain\":true,\"isDisplayInReportMenu\":null,\"categoryName\":null,\"reportOutputFormat\":null,\"isAgencyLevel\":true,\"sortColumn\":null,\"sortDirection\":null,\"searchAreaViewType\":null,\"columns\":[{\"recNo\":101,\"header\":\"All\",\"width\":\"50px\",\"orderId\":0,\"entityRecNo\":null,\"entityName\":null},{\"recNo\":1,\"header\":\"Trip Name\",\"width\":null,\"orderId\":1,\"entityRecNo\":null,\"entityName\":null},{\"recNo\":2,\"header\":\"Client\",\"width\":null,\"orderId\":2,\"entityRecNo\":null,\"entityName\":null},{\"recNo\":3,\"header\":\"Branch\",\"width\":null,\"orderId\":3,\"entityRecNo\":null,\"entityName\":null},{\"recNo\":4,\"header\":\"Trip Advisor\",\"width\":null,\"orderId\":4,\"entityRecNo\":null,\"entityName\":null},{\"recNo\":5,\"header\":\"Trip Start Date\",\"width\":null,\"orderId\":5,\"entityRecNo\":null,\"entityName\":null},{\"recNo\":42,\"header\":\"Reservation Date Created\",\"width\":null,\"orderId\":6,\"entityRecNo\":null,\"entityName\":null},{\"recNo\":43,\"header\":\"Reservation Date Modified\",\"width\":null,\"orderId\":7,\"entityRecNo\":null,\"entityName\":null},{\"recNo\":29,\"header\":\"Travel Category\",\"width\":null,\"orderId\":8,\"entityRecNo\":null,\"entityName\":null},{\"recNo\":12,\"header\":\"Reservation Provider\",\"width\":null,\"orderId\":9,\"entityRecNo\":null,\"entityName\":null},{\"recNo\":16,\"header\":\"Reservation Supplier\",\"width\":null,\"orderId\":10,\"entityRecNo\":null,\"entityName\":null},{\"recNo\":18,\"header\":\"Reservation Primary Traveler\",\"width\":null,\"orderId\":11,\"entityRecNo\":null,\"entityName\":null},{\"recNo\":25,\"header\":\"Reservation Confirmation Number\",\"width\":null,\"orderId\":12,\"entityRecNo\":null,\"entityName\":null},{\"recNo\":13,\"header\":\"Reservation Record Locator\",\"width\":null,\"orderId\":13,\"entityRecNo\":null,\"entityName\":null},{\"recNo\":40,\"header\":\"Trip Date Created\",\"width\":null,\"orderId\":14,\"entityRecNo\":null,\"entityName\":null},{\"recNo\":41,\"header\":\"Trip Date Modified\",\"width\":null,\"orderId\":15,\"entityRecNo\":null,\"entityName\":null},{\"recNo\":36,\"header\":\"Booking Date\",\"width\":null,\"orderId\":16,\"entityRecNo\":null,\"entityName\":null}],\"filters\":[{\"recNo\":1,\"label\":\"Trip Name\",\"filterArea\":5,\"filterFieldList\":[{\"recNo\":0,\"field\":\"tripName\",\"label\":\"Trip Name\",\"value\":null,\"type\":\"TextBoxAreaOperator\",\"placeHolder\":\"Trip Name\",\"displayText\":\"\"}]},{\"recNo\":2,\"label\":\"Reservation Confirmation Number\",\"filterArea\":5,\"filterFieldList\":[{\"recNo\":0,\"field\":\"reservationConfirmationNumber\",\"label\":\"Reservation Confirmation Number\",\"value\":null,\"type\":\"TextBoxAreaOperator\",\"placeHolder\":\"Reservation Confirmation Number\",\"displayText\":\"\"}]},{\"recNo\":3,\"label\":\"Trip Client\",\"filterArea\":5,\"filterFieldList\":[{\"recNo\":0,\"field\":\"clientProfileRecNo\",\"label\":\"Client\",\"value\":null,\"type\":\"LookupFilter\",\"placeHolder\":\"Client\",\"displayText\":\"\"}]},{\"recNo\":21,\"label\":\"Reservation Travel Category\",\"filterArea\":5,\"filterFieldList\":[{\"recNo\":0,\"field\":\"reservationTravelCategory\",\"label\":\"Reservation Travel Category\",\"value\":{\"value\":[5]},\"type\":\"MultiDropDownFieldOperator\",\"placeHolder\":\"Reservation Travel Category\",\"displayText\":\"Tour\"}]}]}"
  }
]
```

