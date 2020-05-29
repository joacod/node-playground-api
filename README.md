# Node.js Playground
Node.js playground Web API using [Express](https://expressjs.com/)

<p align="center">
  <img height="200" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg">
  <img height="200" src="https://virajkadam.com/wp-content/uploads/2019/09/expressjs.png">
</p>

## Notes
The idea of this project is to provide all the apis that exists in my other repositories [NetCore.Playground.Api](https://github.com/joacod/NetCore.Playground.Api) and [go-playground-api](https://github.com/joacod/go-playground-api)

What we get from this:
- We practice different approaches in Node.js
- We can compare **Node.js** implementations with the same ones written in **.NetCore** and **Go**
- We have three versions of the same Web Api written in different languages, that can be switched from a UI having the exact same results

I have created three UI projects to consume the APIs created here, you can use either of the following repositories:
- [Angular Playground](https://github.com/joacod/angular-playground-ui)
- [Vue Playground](https://github.com/joacod/vue-playground-ui)
- [React Playground](https://github.com/joacod/react-playground-ui)

## Prerequisites
- [Install Node.js](https://nodejs.org/)
- Setting of [debug](https://github.com/visionmedia/debug) (Only first time, before running application)
  - $env:DEBUG='app';node app.js (for Windows Powershell)
  - Look at documentation of [debug library](https://github.com/visionmedia/debug) for different platforms

## How to Run it
1. From the terminal: `npm start`
2. Once it's running, go to a browser
3. Hit the following url http://localhost:8080/

## What you will find so far :heavy_check_mark:
- [x] Web API created with Node.js and Express
