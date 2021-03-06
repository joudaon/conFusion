#conFusion

## Table of Contents
 
 - [Installing nodeJS](#installing-nodejs)
 - [Implementing a simple Node HTTP Server](#implementing-a-simple-node-http-server)
 - [Setting up Express web Framework](#setting-up-express-web-framework)
 - [Express Generator](#express-generator)
 - [Setting up MongoDB](#setting-up-mongodb)
 - [Configuring Node application to communicate with MongoDB server](#configuring-node-application-to-communicate-with-mongodb-server)
 - [Using Mongoose methods](#using-mongoose-methods)
 - [Using mongoose-currency](#using-mongoose-currency)
 - [REST API with Express, MongoDB and Mongoose](#rest-api-with-express-mongodb-and-mongoose)
 - [Using Cookies](#using-cookies)
 - [Express Sessions](#express-sessions)
 - [User Authentication with Passport](#user-authentication-with-passport)
 - [Creating your OpenSSL Certificate on Windows](#creating-your-openssl-certificate-on-windows)
 - [Facebook Passport OAuth](#facebook-passport-oauth)
 - [Getting Started with Loopback](#getting-started-with-loopback)

## Installing nodeJS

To install Node on your machine, go to https://nodejs.org and click on the Download button. Depending on your computer's platform (Windows, MacOS or Linux), the appropriate installation package is downloaded. As an example, on a Mac, you will see the following web page. Click on the Download button. Follow along the instructions to install Node on your machine. (Note: Now Node gives you the option of installing a mature and dependable version and a more newer stable version. You can choose to install the mature and dependable version. I will continue to use this version in the course. You can choose to install the newer stable version if you wish. You may not see any perceptible differences between the two as users).

> **Note:** On Windows machines, you may also to install <i class="icon-provider-github"></i> Git on your machine if you don't have it already installed. Some of the Node based tools that we use later will need <i class="icon-provider-github"></i> Git to be installed. You can download the installer from here.

> **Note:** On Windows machines, you may need to configure your PATH environmental variable in case you forgot to turn on the add to PATH during the installation steps.

Verifying the Node Installation

Open a terminal window on your machine. If you are using a Windows machine, open a cmd window or PowerShell window with admin privileges.
To ensure that your NodeJS setup is working correctly, type the following at the command prompt to check for the version of Node and NPM

```sh
$ node -v
$ 
$ npm -v
```


## Implementing a simple Node HTTP Server


* Create a file name server.js

```javascript
var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res){
  console.log(req.headers);
    res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<html><body><h1>Hello World</h1></body></html>');
  })
server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
``` 

* Run the server 

```sh
$ node server
```

* Type "http://locahost:3000" in the browser and see result

* Also "Postman" (https://www.getpostman.com/) Chrome extension can be used to send requests to the server and see the response

## Setting up Express web Framework

Installing Express Framework

```sh
$ npm install express --save
```

Installing Morgan

```sh
$ npm install morgan --save
```

Installing body-parser. 

> **Note:** BodyParser enables us to parse the data, but comes in in the request body, and then converted into JavaScript objects that are available In our request message that comes in. So it parses the data and then adds it as a JavaScript object to req object that we have access to in the functions that we use within our code.

```sh
$ npm install body-parser --save
```

## Express Generator

Installing Express Generator globally
```sh
$ npm install express-generator -g
```

Scaffolding Express Application
```sh
$ express node-express-gen
```

Move to the "node-express-gen" just created folder and install node modules of package.json file.
```sh
$ npm install
```

To startup the server:
```sh
$ npm start
```

User postman and browser to localhost:3000

## Setting up MongoDB

### Running MongoDB Enterprise

* Download "Entreprise Server" version (*.msi file) from http://www.mongodb.org/ 

Installation information can be found here: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

* Install the downloaded file

> **Note:** These instructions assume that you have installed MongoDB to C:\Program Files\MongoDB\Server\3.4\.

* Set up MongoDB environment
```sh
$ "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath "c:\test\mongodb\data"
```

* StartMongoDB
```sh
$ "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
```

* Connect to MongoDB

Run as an admin:
```sh
$ "C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe"
```

### Configure a Windows Service for MongoDB Enterprise

* Open console as an administrator

* Create directories
```sh
$ mkdir c:\data\db
$ mkdir c:\data\log
```

* Create a configuration file 

Create a configuration file. The file must set systemLog.path. Include additional configuration options as appropriate.

For example, create a file at C:\Program Files\MongoDB\Server\3.4\mongod.cfg that specifies both systemLog.path and storage.dbPath:

* Create directories
```sh
systemLog:
  destination: file
  path: c:\data\log\mongod.log
storage:
  dbPath: c:\data\db
```

* Install MongoDB service
```sh
$ "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --config "C:\Program Files\MongoDB\Server\3.4\mongod.cfg" --install
```

* Start the MongoDB service
```sh
$ net start MongoDB
```

### DB Scripts

* Create a database
```sql
$ use conFusion
```

* Show help 
```sql
$ db.help()
```

* Create a collection named dishes, and insert a new dish document in the collection:
```sql
$ db.dishes.insert({ name: "Uthapizza", description: "Test" });
```

* Print out information
```sql
$ db.dishes.find().pretty();
```

* Setting administrative privileges to a user
```sql
$ db.users.update({username:"admin"},{$set:{admin:true}})
```

* Drop database
```sql
$ db.dropDatabase();
```

* Drop collection (table)
```sql
$ db.COLLECTION_NAME.drop();
```

* List all databases
```sql
$ show dbs
```

* Printing out timestamp
```sql
$ var id = new ObjectId();
$ id.getTimestamp();
```

* Further installation instructions can be found [here] (https://docs.mongodb.com/manual/tutorial/install-mongodb-enterprise-on-windows/).

## Configuring Node application to communicate with MongoDB server

* Create a folder "node-mongodb" and move into the folder

* Install Node MongoDB driver and the Assert module by typing the following at the command prompt:
```sh
$ npm install mongodb --save
$ npm install assert --save
```

* Creating a simple node-mongodb application

Create a new file named "simpleserver.js" and add the following code:

```js
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
    assert.equal(err,null);
    console.log("Connected correctly to server");
        var collection = db.collection("dishes");
        collection.insertOne({name: "Uthapizza", description: "test"}, function(err,result){
        assert.equal(err,null);
        console.log("After Insert:");
        console.log(result.ops);
                collection.find({}).toArray(function(err,docs){
            assert.equal(err,null);
            console.log("Found:");
            console.log(docs);
                        db.dropCollection("dishes", function(err, result){
               assert.equal(err,null);
               db.close();
            });
        });
            });
});
```

* Run the server 

```sh
$ node simpleserver
```

## Using Mongoose methods

* Create a folder named "node-mongoose" and move into the folder

* Install Mongoose by typing the following at the command prompt
```sh
$ npm install mongoose --save
$ npm install assert --save
```

## Using mongoose-currency

```sh
$ npm install mongoose-currency --save
```

More info at :https://www.npmjs.com/package/mongoose-currency

## REST API with Express, MongoDB and Mongoose

* Scaffold out an Express application named rest-server using the Express generator at a convenient location on your computer by typing the following at the prompt:
```sh
$ express rest-server
```

* Running the server

Type the following code at the root of the folder:
```sh
$ npm start 
```

Use Postman to test PUT, POST and so on methods with dishes

## Using Cookies

To install the cookie-parser Express middleware, type the following at the prompt:
```sh
$ npm install cookie-parser --save 
```

## Express Sessions
To install express-session and session-file-store Node modules, type the following at the prompt:
```sh
$ npm install express-session session-file-store --save 
```

If "Postman" does not display cookies check following link: https://www.getpostman.com/docs/interceptor_cookies

## User Authentication with Passport

Install the Passport related Node modules and the jsonwebtoken module as follows:
```sh
$ npm install passport passport-local passport-local-mongoose --save
$ npm install jsonwebtoken --save
```

## Creating your OpenSSL Certificate on Windows

* Download [Win32 OpenSSL v1.0.2j](http://slproweb.com/download/Win32OpenSSL-1_0_2j.exe) (OpenSSL Installer) from: http://slproweb.com/products/Win32OpenSSL.html

* Type following commands at the terminal once in \bin\ folder:
```sh
$ set RANDFILE=c:\...\server\bin\.rnd
$ set OPENSSL_CONF=C:\OpenSSL-Win32\bin\openssl.cfg
$ "c:\OpenSSL-Win32\bin\openssl.exe"
$ genrsa -out ca.key 4096
$ req -new -x509 -days 1826 -key ca.key -out ca.crt
$ genrsa -out ia.key 4096
$ req -new -key ia.key -out ia.csr
$ x509 -req -days 730 -in ia.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out ia.crt
$ pkcs12 -export -out ia.p12 -inkey ia.key -in ia.crt -chain -CAfile ca.crt
$ x509 -in ca.crt -out certificate.pem -outform PEM
```

* More info at: 

https://blog.didierstevens.com/2015/03/30/howto-make-your-own-cert-with-openssl-on-windows/

http://stackoverflow.com/questions/4691699/how-to-convert-crt-to-pem

## Facebook Passport OAuth

* Install passport-facebook module by typing the following at the prompt:
```sh
$ npm install passport-facebook --save
```
* Registering your app on Facebook 

Go to https://developers.facebook.com/apps/ and register your app by following the instructions there and obtain your App ID and App Secret, and then update config.js with the information.

## Getting Started with Loopback

* At the command prompt, type the following to install Loopback command-line tools globally:
```sh
$ npm install strongloop -g
```

If "gyp" is not on Windows computer, follow following instructions: https://github.com/nodejs/node-gyp

* To Scaffold Out a Loopback Application, at a convenient location on your computer, type the following at the prompt to scaffold out a Loopback application:
```sh
$ slc loopback
```

* For the application name, type loopback-server, and accept the suggested Loopback directory. Then for the application type select api-server. This will create a folder named loopback-server. Move to this folder in your terminal window.

* To create a Loopback model for dishes, type the following at the prompt:
```sh
$ slc loopback:model
```

* Once model with different fields have been created, Start the server:
```sh
$ node .
```

* Browse to: http://localhost:3000/explorer/

* Setting up Access control list
```sh
$ slc loopback:acl
```

* Setting up loopback relations
```sh
$ slc loopback:relation
```

* Define and Use a Mixin (allows us to add timestamps)
```sh
$ npm install loopback-ds-timestamp-mixin --save
```