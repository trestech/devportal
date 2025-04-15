---
layout: api_page
title: "Version"
description: "The version method takes no parameters and returns the current server API version number"
assembly_version: "1.4.15.6"
---

The version method takes no parameters and returns the current server API version number. An identity token is not required.

| Output Parameter | Description |
| ---------------- | ----------- |
| resultCode | Result code |
| resultDescription | Text that describes the result |
| version | server API version number |

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |

#### Example request
```sh
GET https://api-dev.trestechnologies.com/version
Content-Type: application/json
```

#### Example response
```sh
Status: 200 Ok
{
    "resultCode": 0,
    "resultDescription": "",
    "version": "0.9.3.3"
}
```
