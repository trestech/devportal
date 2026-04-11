---
layout: post
title: "Tres API docs refresh: expanded search options and newly documented endpoints"
date: 2026-04-11 13:45:00 -0700
description: "The developer portal now reflects newly documented API endpoints, expanded search parameters across many existing methods, and richer entity schemas."
---

We have refreshed the Tres Developer Portal to better reflect the current API surface.

This update includes newly documented endpoints, broader search options across many existing `*Search` methods, and richer field and relationship coverage on several existing entities.

## Newly documented endpoints

The following endpoints are now documented in the developer portal:

- [`AirlineArrivalManifestSearch`]({{ '/api/AirlineArrivalManifestSearch.html' | relative_url }})
- [`AirlineDepartureManifestSearch`]({{ '/api/AirlineDepartureManifestSearch.html' | relative_url }})
- [`ClientDocumentAcknowledgementClientProfile`]({{ '/api/ClientDocumentAcknowledgementClientProfile.html' | relative_url }})
- [`HotelRoomingListSearch`]({{ '/api/HotelRoomingListSearch.html' | relative_url }})

## Expanded search capabilities

Many existing search methods now document additional inherited controls and filters.

Examples include:

- `skipLookup`
- `readOnlyIntent`
- `priority`
- additional range and related-search parameters on selected methods

This affects a broad set of existing `*Search` endpoints, including examples such as:

- [`AccountingEntrySearch`]({{ '/api/AccountingEntrySearch.html' | relative_url }})
- [`ActivitySearch`]({{ '/api/ActivitySearch.html' | relative_url }})
- [`AppUserSearch`]({{ '/api/AppUserSearch.html' | relative_url }})
- [`PaymentSearch`]({{ '/api/PaymentSearch.html' | relative_url }})
- [`ProfileSearch`]({{ '/api/ProfileSearch.html' | relative_url }})
- [`TripSearch`]({{ '/api/TripSearch.html' | relative_url }})

## Richer entity documentation

Several existing entity documents now reflect additional fields, relationships, nested tables, deprecations, and enum values.

Examples include:

- [`AppUser`]({{ '/api/AppUser.html' | relative_url }})
- [`ClientProfile`]({{ '/api/ClientProfile.html' | relative_url }})
- [`Trip`]({{ '/api/Trip.html' | relative_url }})
- [`Person`]({{ '/api/Person.html' | relative_url }})
- [`DocumentTemplate`]({{ '/api/DocumentTemplate.html' | relative_url }})
- [`Agency`]({{ '/api/Agency.html' | relative_url }})
- [`Branch`]({{ '/api/Branch.html' | relative_url }})

## What this means for integrators

If you already integrate with the Tres API, this refresh may expose capabilities that were already present in the live API but not fully reflected in the portal.

If you are exploring new integrations, the refreshed docs should make it easier to:

- discover additional search controls
- understand richer response and relationship shapes
- find newly documented endpoint coverage

## Next steps

We plan to continue tightening the alignment between the live API and the developer portal so newly available capabilities appear more consistently and with less lag.

We will also follow up on Swagger deep-link support so cross-links from the portal can land more precisely inside the Swagger UI.
