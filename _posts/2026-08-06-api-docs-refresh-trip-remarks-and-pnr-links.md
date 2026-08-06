---
layout: post
title: "Tres API docs refresh: trip remarks, PNR links, and richer trip data"
date: 2026-08-06 09:04:00 -0700
description: "The developer portal now reflects AppServer 1.7.5.5, including trip remarks, profile PNR-entry relationships, expanded trip search data, and newly documented deprecations."
---

The Tres Developer Portal now reflects the API documentation shipped with AppServer 1.7.5.5.

This refresh adds a new trip remarks reference, documents profile-to-PNR relationships, expands trip and search data, and makes several deprecations and corrected data types visible to integrators.

## Trip remarks and trip data

[`TripRemarks`]({{ '/api/TripRemarks.html' | relative_url }}) is now documented as a dedicated API resource, including the view options that control where each remark appears.

The [`Trip`]({{ '/api/Trip.html' | relative_url }}) and [`TripSearch`]({{ '/api/TripSearch.html' | relative_url }}) references now cover additional remarks, warning, fare, ticket, itinerary, and profile-related data. Existing trip remark fields are also identified as deprecated where the dedicated remarks tables should be used instead.

## Profile PNR entries

The [`ClientProfile`]({{ '/api/ClientProfile.html' | relative_url }}) and [`Person`]({{ '/api/Person.html' | relative_url }}) references now document their PNR-entry relationships, including GDS type, description, move behavior, and value.

[`ClientProfileMergeToPnr`]({{ '/api/ClientProfileMergeToPnr.html' | relative_url }}) also documents the client and traveler PNR-entry data used during a merge.

## Search and schema refinements

This update includes additional filters and fields across several references, including:

- application-setting name searches
- trip-import record-locator searches
- supplier duplicate detection
- traveler-portal visibility and address-print options
- corrected `DateTimeOffset` types for completed action-item dates

The refreshed docs also call out deprecations such as the stored [`GeneralLedgerAccount`]({{ '/api/GeneralLedgerAccount.html' | relative_url }}) balance and legacy payment-card token fields, helping integrators move toward their supported replacements.

## What integrators should do

Review the refreshed schemas if your integration reads trip, profile, payment, or accounting data. New fields can expand available output, while newly documented deprecations identify fields that should not be the basis of new integration work.
