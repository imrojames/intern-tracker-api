# intern-tracker-api

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Mon Sep 16 2024 17:34:06 GMT-0400 (Eastern Daylight Time) using Sails v1.5.11.

<!-- Internally, Sails used [`sails-generate@2.0.11`](https://github.com/balderdashy/sails-generate/tree/v2.0.11/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

### API Endpoint

+ POST '/register'
```json
{
  "employeeData": {
    "last_name": "Doe",
    "first_name": "John",
    "middle_name": "Smith",
    "mobile": "09123456789",
    "email": "johndoe@example.com",
    "address": "123 Main St, Sample City",
    "birthdate": "1990-01-01",
    "gender": "Male",
    "civil_status": "Single"
  },
  "employeeAccountData": {
    "username": "johndoe",
    "email": "johndoe@example.com",
    "password": "password123",
    "user_type": 1
  },
  "incaseOfEmergencyData": {
    "name": "Jane Doe",
    "contact_number": "09187654321",
    "contact_email": "janedoe@example.com",
    "relationship": "Sister",
    "contact_address": "456 Second St, Sample City"
  }
}
```
+ POST '/login' - To authenticate and generate the Authorization token
```json
{
	"email": "johndoe@example.com",
	"password": "password123"
}
```
+ GET '/employees' - To retrieve all employee. This is a protected route. Needs a Authrization header
+ GET '/employee/:id' - To retrieve a specific employee by id. This is a protected route. Needs a Authrization header
+ PATCH '/employee/:id' To update employee data except employee account. This is a protected route. Needs a Authrization header
```json
{
	"employeeData": {
		"last_name": "Doe",
		"first_name": "John",
		"middle_name": "Smith",
		"mobile": "09123456789",
		"email": "johndoe@example.com",
		"address": "123 Main St, Sample City",
		"birthdate": "1990-01-01",
		"gender": "Male",
		"civil_status": "Single"
	},
	"emergencyData": {
		"name": "Jane Doe",
		"contact_number": "09187654321",
		"contact_email": "janedoe@example.com",
		"relationship": "Sister",
		"contact_address": "456 Second St, Sample City"
	}
}
```
+ PUT '/employee/remove/:id' - To soft delete employee. This is a protected route. Needs a Authrization header
