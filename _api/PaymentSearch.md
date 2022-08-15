---
layout: api_page
title: "PaymentSearch"
description: ""
---



Permission Areas: ClientPayment, SupplierPayment, OtherPayment

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | payment | 
| tagValue | string | 1024 | payment | 
| summaryCount | int |  | payment | 
| profileType | short |  | payment | Client = 1, Supplier = 2, Other = 3
| profileRecNo | long |  | payment | 
| profileName | string | 256 | payment | 
| amount | long |  | payment | 
| paymentDate | Date |  | payment | 
| payType | short |  | payment | Received = 1, Made = 2
| method | short |  | payment | Cash = 1, Check = 2, EFT = 3, CreditCard = 4, Other = 99
| bankRecNo | long |  | payment | 
| bankName | string | 64 | payment | 
| agencyProcessed | bool |  | payment | 
| cardNumber | string | 64 | payment | 
| nameOnCard | string | 64 | payment | 
| checkNumber | long |  | payment | 
| reservationRecNo | long |  | paymentDetail | 
| reservationAmount | long |  | paymentDetail | 
| voided | bool |  | payment | 
| accountingEntryRecNo | long |  | payment | 
| remarks | string | 256 | payment | 
| dateCleared | Date |  | payment | 
| bankTransactionRecNo | long |  | payment | 
| paidBy | short |  | payment | Client = 1, Supplier = 2, Other = 3
| paidTo | short |  | payment | Client = 1, Supplier = 2, Other = 3

| Parameter | Type | Linked Column | Description |
| --------- | ---- | ------------- | ----------- |
| recNo [inherited] | [NumSearchParam](NumSearchParam) | recNo | 
| startingRow [inherited] | int |  | 
| rowCount [inherited] | int |  | 
| topRows [inherited] | int |  | 
| distinct [inherited] | bool |  | 
| includeCols [inherited] | string[] |  | 
| includeColsExtended [inherited] | includeColsExtended[] |  | 
| baseUrl [inherited] | string |  | 
| tagRecNo [inherited] | long[] |  | 
| tagValue [inherited] | string |  | 
| tagValueCond [inherited] | short |  | See [StringCompare]({{ '/api/StringCompare.html' | relative_url }})
| displayTagRecNo [inherited] | long |  | 
| tags [inherited] | TagsSearchParams[] |  | 
| profileType | long | profileType | 
| tripRecNo | [NumSearchParam](NumSearchParam) |  | 
| reservationRecNo | [NumSearchParam](NumSearchParam) | reservationRecNo | 
| paymentDateFrom | DateSearchParam | paymentDate | 
| paymentDateTo | DateSearchParam | paymentDate | 
| clientProfileRecNo | [NumSearchParam](NumSearchParam) | profileRecNo | 
| supplierProfileRecNo | [NumSearchParam](NumSearchParam) | profileRecNo | 
| otherProfileRecNo | [NumSearchParam](NumSearchParam) | profileRecNo | 
| payType | long |  | 
| method | `EnumSearchParam<Method>` | method | Cash = 1, Check = 2, EFT = 3, CreditCard = 4, Other = 99
| bankRecNo | [NumSearchParam](NumSearchParam) | bankRecNo | 
| agencyProcessed | bool | agencyProcessed | 
| voided | bool | voided | 
| cleared | bool | dateCleared | 
| dateClearedFrom | DateSearchParam | dateCleared | 
| dateClearedTo | DateSearchParam | dateCleared | 
| bankTransactionRecNo | [NumSearchParam](NumSearchParam) | bankTransactionRecNo | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


