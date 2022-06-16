---
layout: post
---

﻿# Agency


| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | int |  | {string.Join(',', flags)} | agency | 
| name | string | 256 | {string.Join(',', flags)} | agency | 
| alias | string | 64 | {string.Join(',', flags)} | agency | 
| uniqueId | string | 64 | {string.Join(',', flags)} | agency | 
| phone | string | 256 | {string.Join(',', flags)} | agency | 
| email | string | 256 | {string.Join(',', flags)} | agency | 
| street1 | string | 128 | {string.Join(',', flags)} | agency | 
| street2 | string | 128 | {string.Join(',', flags)} | agency | 
| city | string | 64 | {string.Join(',', flags)} | agency | 
| stateProvince | string | 8 | {string.Join(',', flags)} | agency | 
| zipPostalCode | string | 16 | {string.Join(',', flags)} | agency | 
| country | string | 4 | {string.Join(',', flags)} | agency | 
| headerInfo | string | 512 | {string.Join(',', flags)} | agency | 
| logoData | byte[] |  | {string.Join(',', flags)} | agency | 
| itineraryRemarks | string |  | {string.Join(',', flags)} | agency | 
| supplierStatementRemarks | string |  | {string.Join(',', flags)} | agency | 
| merchantId | string | 64 | {string.Join(',', flags)} | agency | 
| merchantUserName | string | 64 | {string.Join(',', flags)} | agency | 
| merchantPassword | string | 256 | {string.Join(',', flags)} | agency | 
| merchantMaxChargeAmount | long |  | {string.Join(',', flags)} | agency | 
| agencyAffiliationLink  | table |  |  |  | 
| agency_recNo | int |  | {string.Join(',', flags)} | agencyAffiliationLink | 
| affiliation_recNo | int |  | {string.Join(',', flags)} | agencyAffiliationLink | 
| affiliationName | string | 64 | {string.Join(',', flags)} | agencyAffiliationLink | 
| id | string | 32 | {string.Join(',', flags)} | agencyAffiliationLink | 
| agencyAdvisorReconciliation  | table |  |  |  | 
| agency_recNo | int |  | {string.Join(',', flags)} | agencyAdvisorReconciliation | 
| travelCategory_recNo | short |  | {string.Join(',', flags)} | agencyAdvisorReconciliation | 
| paymentTrigger | short |  | {string.Join(',', flags)} | agencyAdvisorReconciliation | 
