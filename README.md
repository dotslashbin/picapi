# PICAPI
by : Joshua Fuentes 

Picapi is a  simple monolith built with NodeJS. It provides API endpoints that allow a user to submit and fetch photos collected in the back-end database. Here are the following endpoints and their description: 

|Request|Endpoint  |Example| Description
|--|--|--|--|
|POST|/image|localhost:8080/image|Submits photo data for storage|
|GET|/image?page={number}&limit={optional}|localhost:8080/image?page=1&limit=5|Returns a list of photos. The pagination queries are optional. 
|GET|/image/:photoId|localhost:8080/image/60eba7f3954edfde3addac1c|Returns a single photo record|
|PATCH|/image:photoId|localhost:8080/image/60eba7f3954edfde3addac1c|Makes a request to "**take**" a photo, which changes it's state of availability.|


###  Ports
*  Port: 8080 - I configured the application to run on this port. Should you need to change it, change the configuration on the docker-compose.yml file. 
* Database port 27017 - I configured the database to use the default MongoDB port. You can also configure this by changing the specifications from the docker-compose.yml

## Stack
1.  Docker images:
	1.  Node 14.17 (LTS)
	2.  MongoDB (latest)
2.  Language - javascript and typescript
3.  Framework - express
4.  ORM - Typegoose / Mongoose
5.  Repository - github
6.  Code Quality - SonarCloud

## Running the app locally
1.  Clone the repository and change the directory to where you cloned the application.
2.  To avoid complications, please ensure that nothing on your system is using ports 8080 and 27017. Should you wish to use other ports, please edit the docker-compose.yml file accordingly. [Here](https://docs.docker.com/compose/networking/) is a reference to help you with the configuration.
3.  Ensure that your system has running docker installation that supports docker-compose. [Here](https://docs.docker.com/get-docker/) is a guide for installation, should you need it.
4.  In the directory, you will find that there is a _makefile._ It will build the environment for you. Run **make** and wait for the process to finish.
5.  As soon as you see containers running, you can test the endpoints using your favorite API testing tools. If you see the indications below, you should be good to go. 

> Creating picapi_picapi_app_1 ... done
Creating picapi_picapi_db_1  ... done 

## Terminating the app
Simply run **make clean** and things will be cleaned out of your system. 