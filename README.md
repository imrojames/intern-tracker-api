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
### API Endpoints
Register User:
POST auth/register
Admin:
{
	"last_name": "Binoya",
	"first_name": "Rojames",
	"middle_name": "",
	"mobile": "09453284289",
	"email": "r.binoya@jobtarget.com",
	"address": "Ormoc City",
	"birthdate": "1997-02-10",
	"gender": "Male",
	"civil_status": "Single",
	"username": "roj",
	"password": "roj12345",
	"name": "Lenny Rose Laureano",
	"contact_number": "09123663281",
	"contact_email": "lenny@gmail.com",
	"relationship": "Wife",
	"contact_address": "Ormoc City"
}

User:
{
	"last_name": "Binoya",
	"first_name": "Rojames",
	"middle_name": "",
	"mobile": "09453284289",
	"email": "r.binoya@jobtarget.com",
	"address": "Ormoc City",
	"birthdate": "1997-02-10",
	"gender": "Male",
	"civil_status": "Single",
	"username": "roj",
	"password": "roj12345",
  "user_type": 0, // 0 = user
	"name": "Lenny Rose Laureano",
	"contact_number": "09123663281",
	"contact_email": "lenny@gmail.com",
	"relationship": "Wife",
	"contact_address": "Ormoc City"
}

Login:
POST auth/login
{
	"email": "r.binoya@jobtarget.com",
	"password": "roj12345"
}
