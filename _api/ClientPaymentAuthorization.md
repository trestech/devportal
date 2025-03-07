---
layout: api_page
title: "ClientPaymentAuthorization"
description: ""
assembly_version: "1.4.12.8"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  |  | `clientPaymentAuthorization` | 
| `status` | `short` |  | ReadOnly | `clientPaymentAuthorization` | Pending = 1, Authorized = 2, Expired = 3
| `authorizedAmount` | `long` |  | ReadOnly | `clientPaymentAuthorization` | 
| `description` | `string` | 128 | ReadOnly | `clientPaymentAuthorization` | 
| `cardNumber` | `string` | 64 |  | `clientPaymentAuthorization` | 
| `expirationDate` | `Date` |  |  | `clientPaymentAuthorization` | 
| `cvvCode` | `string` | 4 |  | `clientPaymentAuthorization` | 
| `nameOnCard` | `string` | 64 |  | `clientPaymentAuthorization` | 
| `billingAddress` | `string` | 128 |  | `clientPaymentAuthorization` | 
| `billingZipPostalCode` | `string` | 16 |  | `clientPaymentAuthorization` | 
| `clientRemarks` | `string` | 128 |  | `clientPaymentAuthorization` | 
| `clientName` | `string` | 256 | ReadOnly | `clientPaymentAuthorization` | 
| `advisorProfile_recNo` | `long` |  | ReadOnly, FKey | `clientPaymentAuthorization` | 
| `branch_recNo` | `long` |  | ReadOnly, FKey | `clientPaymentAuthorization` | 
| `tripName` | `string` | 256 | ReadOnly | `clientPaymentAuthorization` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


