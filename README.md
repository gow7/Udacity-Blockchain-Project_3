# Project 3: RESTful Web API with Node.js Framework

Here we have utilized the "Project 2: Private Blockchain" and expose the functionality as RESTful Web API with Node.js Framework

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Installing Node and NPM is pretty straightforward using the installer package available from the (Node.js® web site)[https://nodejs.org/en/].

### Configuring your project

- Use NPM to initialize your project and create package.json to store project dependencies.
```
npm init
```
- Install crypto-js with --save flag to save dependency to our package.json file
```
npm install crypto-js --save
```
- Install level with --save flag
```
npm install level --save
```
- Install hapi with --save flag
```
npm install hapi --save
```
- Install joi with --save flag
```
npm install joi --save
```

## Testing

To test code:
1: Open a command prompt or shell terminal after install node.js.
2: Start node session with server.js.
```
node server.js
```
3: Start Postman
4: Do a GET request to [http://localhost:8000/block/0] to get the genesis block details.
5: Do a POST request to [http://localhost:8000/block] with following. This will create new Block and return the block as JSON
```
{
  "body": "Testing block with test string data"
}
```
6: Do a GET request to [http://localhost:8000/block/{height}] replace the hight with the value returned from previour response and make sure returned value is same as previous one.
7: Do a GET request to [http://localhost:8000/block/{height}] replace the hight any value higher and alpha characters and make sure you are receiving error message.
