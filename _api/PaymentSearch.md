---
layout: api_page
title: "PaymentSearch"
description: ""
---



Referenced Table: [Payment]({{ '/api/Payment.html' | relative_url }})

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
| method | short |  | payment | None = 0, Cash = 1, Check = 2, EFT = 3, CreditCard = 4, Other = 99
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
| dateCleared | bool |  | payment | 

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
| tagRecNo [inherited] | long[] |  | 
| tagValueCond [inherited] | short |  | See [StringCompare]({{ '/api/StringCompare.html' | relative_url }})
| tagValue [inherited] | string |  | 
| displayTagRecNo [inherited] | long |  | 
| tags [inherited] | [TagsSearch[]](/TagsSearch) |  | 
| profileType | short |  | Client = 1, Supplier = 2, Other = 3
| tripRecNo | long |  | 
| reservationRecNo | long[] |  | 
| paymentDateFrom | Date |  | 
| paymentDateTo | Date |  | 
| clientProfileRecNo | long |  | 
| supplierProfileRecNo | long |  | 
| otherProfileRecNo | long |  | 
| payType | short |  | Received = 1, Made = 2
| method | short[] |  | None = 0, Cash = 1, Check = 2, EFT = 3, CreditCard = 4, Other = 99
| bankRecNo | long[] |  | 
| agencyProcessed | bool |  | 
| voided | bool |  | 
| cleared | bool |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


