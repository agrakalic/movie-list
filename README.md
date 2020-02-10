# movie-list
Simple Movie List App - Parcel / React / Redux / Express / Tabelica CSS
## Requirements
This app requires Node.js to run. If you don't have it installed already, go to the [official website](nodejs.org), download the package, open it and follow the wizard.
Also, the part of this project is bundled with [Parcel](https://parceljs.org/) so make sure you have it installed as well. Use:
```bash
npm install -g parcel-bundler
```
## Information
The app consists of two main parts: frontend and the backend, each run separately. Backend is a run with NodeJS / Express while front is a React / Redux application.
## Backend 
Go to the `/api` folder and run 
```bash
npm install
```
to install all the dependencies. There are two commands available:
```bash
npm run start
```
which will start the local server and
```bash
npm run server
```
which is useful for development, since it uses nodemon, a simple monitor script for use during development of a node.js app. Using nodemon you don't have to restart the server after each update. 
Server will run on 
```bash
http://localhost:5000/
```
## Frontend 
Go to the root of the project and run
```bash
npm install
```
to install all the dependencies. There are two commands available:
```bash
npm run dev
```
and
```bash
npm run build
```
First is used during the development process, it sets a watch and hot module replacement tasks running and is starts the local server. The second one compiles the entire app and make it ready for production.
Development server runs on 
```bash
http://localhost:1234/
```
