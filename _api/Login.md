---
layout: api_page
title: "Login"
description: "The login method initiates a connection to an agency context on the server"
assembly_version: "1.0.24.6"
---

The login method initiates a connection to an agency context on the server. An alias identifies the agency context and username/password is specified in an authorization header using basic authentication. 

The method returns a Json response that includes an identity token which is needed for subsequent operations for the same agency context.

| Input Parameter | Required/Optional | Description |
| --------------- | ----------------- | ----------- |
| alias | Required| Identifies the targeted context for login |

| Output Parameter | Description |
| ---------------- | ----------- |
| resultCode | Result code |
| resultDescription | Text that describes the result |

| Result code | Description |
| ----------- | ----------- |
| 0 | success |
| 100 | Invalid AppServer client version |
| 101 | Invalid Username/Password |
| 102 | Password is expired |
| 103 | User locked |
| 104 | User disabled |
| 105 | Invalid alias |
| 106 | Agency not initialized |
| 107 | Agency disabled |
| 108 | Agency cancelled |

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |

#### Example request
```sh
GET https://api-dev.trestechnologies.com/login/{alias}
Content-Type: application/json
Authorization: Basic Auth (Username, Password)

curl --location --request GET 'https://api-dev.trestechnologies.com/login/0001' \
--header 'Authorization: Basic e3t1c2VybmFtZX19Ont7cGFzc3dvcmR9fQ==' \
```

#### Example success response
```sh
Status: 200 Ok
{
    "identityToken": "ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAiZXhwaXJlRGF0ZSI6ICIyMDIyLTAzLTI0VDAwOjUwOjI5LjExNzI1OTIrMDA6MDAiLA0KICAiZXhwaXJlSW50ZXJ2YWwiOiAzMCwNCiAgImFnZW5jeVJlY05vIjogMSwNCiAgImFwcFVzZXJSZWNObyI6IDEzNzQsDQogICJhZG1pblVzZXJSZWNObyI6IG51bGwsDQogICJ1c2VyTmFtZSI6ICJBZG1pbiIsDQogICJhbGlhcyI6ICIwMDAxIiwNCiAgInRva2VuUmVjTm8iOiAxMDUxMjUsDQogICJhcHBOYW1lIjogIlBvc3RtYW4iLA0KICAiY2xpZW50SVBBZGRyZXNzIjogIjEwLjEuMi42IiwNCiAgImFmZmlsaWF0aW9uUmVjTm8iOiBudWxsDQp9.0eXC554Z9iscFE0T_lNg4F4ymfILE4tXDN28UAB6Xwk",
    "resultCode": 0,
    "resultDescription": "Login Successful"
}
```

#### Example error response
```sh
Status: 401 Unauthorized
{
    "resultCode": 101,
    "resultDescription": "Invalid Username/Password",
    "method": "login",
}
```
