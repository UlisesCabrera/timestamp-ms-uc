# Timestamp microservice
A microservice where the user can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016). And if it does, it returns both the Unix timestamp and the natural language form of that date. If it does not contain a date or Unix timestamp, it returns null for those properties.
###Example Usage:
```sh
https://timestamp-ms-uc.herokuapp.com/December%2015,%202015
https://timestamp-ms-uc.herokuapp.com/1450137600
```
###Example output:
```sh
{ "unix": 1450137600, "natural": "December 15, 2015" }
```
