# Kayla Hoffman CPA02 - CS103a

This is a creative programming assignment that expands on the ExpressApp from class. I added additional fields to the signup, a filter when finding courses, and an aggregation. It also uses a personal cloud-based mongoose database. It is deployed to Heroku at this link https://tranquil-stream-50149.herokuapp.com/ but works locally too. To use this app, copy the Heroku link and paste into the search bar or follow the instructions at the bottom of the README.


## Login/Signup
![image](https://user-images.githubusercontent.com/64444491/167326079-19c4ec30-8778-4b47-a4d3-3cac3d2b4676.png)

## Home Screen
![image](https://user-images.githubusercontent.com/64444491/167326132-76fce6ae-132a-4d8e-9247-e8243e743a98.png)

## Aggregation Demo Results
These show the results of the largest classes by enrollement in each department, sorted in descending order, excluding independent studies.

![image](https://user-images.githubusercontent.com/64444491/167326178-9c4c6a75-95a5-45cf-ba8d-adabeb129930.png)

## Course Finder
Search for courses by subject or by instructor email handle. Both of these searches can be filtered to show only small classes (defined as fewer than 30 students).

![image](https://user-images.githubusercontent.com/64444491/167326309-090f5cb7-1fd1-497f-9f7d-a38e23a9c27d.png)

## Course Schedule
This shows the users full schedule within a neat table.

![image](https://user-images.githubusercontent.com/64444491/167326410-0847e326-0b4e-4ed5-a0fd-17315af643ab.png)


## Installation for running the app locally
Download the project from github and download nodejs and npm from https://nodejs.org
and cd into the folder

Install the packages with
``` bash
npm install
```
Start the project with
``` bash
node app.js
```
or install nodemon (the node monitoring app) with
``` bash
npm install -g nodemon
```
and start the project with
``` bash
nodemon
```
Additionally, in the Connecting to the Database section of the app.js file, change it to 
const mongodb_URI = 'mongodb://localhost:27017/cs103a_todo'

https://brandeis.zoom.us/rec/share/8RkumIbaM-oZXprU6YW1lTU4jRMEosK-B9dZnOt88XFyNqwZkR81GVwqt-1CyPWc.WNjQYNUrIhMgDhWP?startTime=1652059406000 
