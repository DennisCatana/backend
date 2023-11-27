/* Pasos */

//1. npm init --y
//2. nom i mongoose para una libreria 
//3. ir ar: https://nodejs.org/api/http.html#http
//4. buscar crear un servvidor y ubicarlo en csj 
// copiar el codigo  

// const http = require('node:http');

// // Create a local server to receive data from
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!',
//   }));
// });

// server.listen(8000);


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})