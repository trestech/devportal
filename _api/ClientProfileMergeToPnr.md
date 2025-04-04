---
layout: api_page
title: "ClientProfileMergeToPnr"
description: ""
assembly_version: "1.4.14.9"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `clientProfileMergeToPnr` | 
| `name` | `string` | 1024 |  | `clientProfileMergeToPnr` | 
| `billingAddress` | `string` | 1024 |  | `clientProfileMergeToPnr` | 
| `mailingAddress` | `string` | 1024 |  | `clientProfileMergeToPnr` | 
| `branch` | `string` | 1024 |  | `clientProfileMergeToPnr` | 
| `advisor` | `string` | 1024 |  | `clientProfileMergeToPnr` | 
| `profileId ` | table |  |  | `clientProfileMergeToPnr` | 
| `clientRecNo` | `long` |  | InsertOnly, FKey | `profileId` | 
| `id` | `string` | 1024 |  | `profileId` | 
| `phone ` | table |  |  | `clientProfileMergeToPnr` | 
| `clientRecNo` | `long` |  | InsertOnly, FKey | `phone` | 
| `phoneNumber` | `string` | 1024 |  | `phone` | 
| `email ` | table |  |  | `clientProfileMergeToPnr` | 
| `clientRecNo` | `long` |  | InsertOnly, FKey | `email` | 
| `emailAddress` | `string` | 1024 |  | `email` | 
| `traveler ` | table |  |  | `clientProfileMergeToPnr` | 
| `recNo` | `long` |  | PKey | `traveler` | 
| `clientRecNo` | `long` |  | InsertOnly, FKey | `traveler` | 
| `name` | `string` | 1024 |  | `traveler` | 
| `dateOfBirth` | `string` | 1024 |  | `traveler` | 
| `knownTravelerNumber` | `string` | 1024 |  | `traveler` | 
| `redressNumber` | `string` | 1024 |  | `traveler` | 
| `emergencyContactEmail` | `string` | 1024 |  | `traveler` | 
| `emergencyContactPhone` | `string` | 1024 |  | `traveler` | 
| `emergencyContactName` | `string` | 1024 |  | `traveler` | 
| `travelerPhone ` | table |  |  | `traveler` | 
| `travelerRecNo` | `long` |  | InsertOnly, FKey | `travelerPhone` | 
| `phoneNumber` | `string` | 1024 |  | `travelerPhone` | 
| `travelerEmail ` | table |  |  | `traveler` | 
| `travelerRecNo` | `long` |  | InsertOnly, FKey | `travelerEmail` | 
| `emailAddress` | `string` | 1024 |  | `travelerEmail` | 
| `frequentFlyer ` | table |  |  | `traveler` | 
| `travelerRecNo` | `long` |  | InsertOnly, FKey | `frequentFlyer` | 
| `frequentFlyerNumber` | `string` | 1024 |  | `frequentFlyer` | 
| `creditCard ` | table |  |  | `traveler` | 
| `travelerRecNo` | `long` |  | InsertOnly, FKey | `creditCard` | 
| `recNo` | `long` |  | PKey | `creditCard` | 
| `maskedCardNumber` | `string` | 1024 |  | `creditCard` | 
| `passport ` | table |  |  | `traveler` | 
| `travelerRecNo` | `long` |  | InsertOnly, FKey | `passport` | 
| `passportNumber` | `string` | 1024 |  | `passport` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


