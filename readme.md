#  Basic Web Server

Simple app that gets the IP address, name, and the Location of the requester

## Table of Contents

* [About](#basic-web-server)
* [Required Features](#required-features)
* [Koyeb Deployment](#koyeb-deployment)
* [Response Test with Postman](#response-test-with-postman)
* [Technologies Used](#technologies-used)
* [Acknowledgements](#acknowledgements)
* [Author](#author)

## Required Features

* App can get the IP address of the requester.
* App can get the location of the requester.
* App can get the name of the.
* App can get the location temperature of the requester.

## Koyeb Deployment
* [https://cruel-alvinia-tosins-381fc3d8.koyeb.app/](https://cruel-alvinia-tosins-381fc3d8.koyeb.app/)

## Response Test with Postman
```shell
    {
        "client_ip": "127.0.0.1", // The IP address of the requester
        "location": "New York" // The city of the requester
        "greeting": "Hello, Mark!, the temperature is 11 degrees Celcius in New York"
    }
```
| METHOD | DESCRIPTION                                                      | ENDPOINTS
| ------ | ---------------------------------------------------------------- | ----------------------------------------------------------------------------
| GET    | Get all data as described in the shell above                     | `https://cruel-alvinia-tosins-381fc3d8.koyeb.app/api/hello?visitor_name=Mark`
| GET    | Get response as described in the shell below when name is empty  | `https://cruel-alvinia-tosins-381fc3d8.koyeb.app/api/hello?visitor_name`

```shell
    {
        "message": "Visitor's name cannot be left empty"
    }
```
## Technologies Used

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Expressjs](https://expressjs.com/) is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [Node-js](https://nodejs.org/en/) Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
* [Koyeb](https://www.koyeb.com/) allows you to deploy resilient applications with zero configuration: we deal with server provisioning, upgrades and failures for you.
* [geoip-lite](https://www.npmjs.com/package/geoip-lite) s a fully JavaScript implementation of the MaxMind geoip API.

## Acknowledgements

* [HNG 11](https://hng.tech/internship)

## Author

* [Alabi Tosin](https://github.com/alatos2)
