---
layout: page
title: "AdvisorReconciliation"
description: ""
---
<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>




| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | advisorReconciliation | 
| reconciliationDate | Date |  |  | advisorReconciliation | 
| description | string | 64 |  | advisorReconciliation | 
| advisorReconciliationDetail  | table |  |  | advisorReconciliation | 
| reservationAdvisor_recNo | long |  | PKey,FKey | advisorReconciliationDetail | 
| advisorReconciliation_recNo | long |  | FKey | advisorReconciliationDetail | 



<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>
