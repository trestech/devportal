---
layout: api_page
title: "TravelSubCategory"
description: ""
assembly_version: "1.4.4.3"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `travelSubCategory` | 
| `travelCategory_recNo` | `short` |  | Required, InsertOnly | `travelSubCategory` | Air = 1, Hotel = 2, Car = 3, Cruise = 4, Tour = 5, Rail = 6, Transfer = 7, Insurance = 8, ServiceFee = 9, Excursion = 10, ClientVoucher = 11, GiftCertificate = 12, SupplierVoucher = 13, Misc = 99
| `name` | `string` | 64 | Required | `travelSubCategory` | 
| `description` | `string` | 128 |  | `travelSubCategory` | 
| `activeStatus` | `bool` |  |  | `travelSubCategory` | 
| `indexNo` | `short` |  |  | `travelSubCategory` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


