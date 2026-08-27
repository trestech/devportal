---
layout: post
title: "Tres API docs refresh: duplicate detection and client payments in trip search"
date: 2026-08-26 17:41:57 -0700
description: "The developer portal now reflects AppServer 1.7.7.1, including client-profile duplicate detection, client-payment columns in trip search, internal trip remarks, and clearer traveler-card constraints."
---

The Tres Developer Portal now reflects the API documentation shipped with AppServer 1.7.7.1.

This refresh expands the data available through trip search, documents duplicate-detection support for client profiles, and clarifies an important traveler-card constraint.

## Client payments in trip search

[`TripSearch`]({{ '/api/TripSearch.html' | relative_url }}) can now return client-payment data alongside trip and reservation results. The new `ClientPayment_*` columns cover payment identity, amount and date, payment method, reservation allocation, clearing and accounting references, currency details, and related bank or agency-card information.

The same reference now includes `tripInternalRemarks`, making internal trip remarks available as an explicit trip-level result column.

Integrations can request only the extended columns they need through the existing trip-search column-selection controls.

## Client-profile duplicate detection

[`ClientProfile`]({{ '/api/ClientProfile.html' | relative_url }}) now documents the `detectDuplicate` boolean field. Integrations can set it when inserting a client profile to ask the API to check for potential duplicates before completing the insert.

## Traveler-card type is insert-only

The [`Person`]({{ '/api/Person.html' | relative_url }}) schema now identifies a traveler's card `type` as insert-only. Choose the correct type when adding a card rather than relying on an update to change an existing card between credit/debit, loyalty, and travel-document categories.

## What integrators should do

Review trip-search column selections if your integration needs payment or internal-remarks data. Integrations that insert client profiles or save traveler cards should also review the refreshed field constraints before adopting AppServer 1.7.7.1 behavior.
