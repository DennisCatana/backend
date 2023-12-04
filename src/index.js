/* Pasos */

//1. npm init --y
//2. npm i express
//3. nom i mongoose para una libreria 
//4. ir ar: https://nodejs.org/api/http.html#http
//5. buscar crear un servvidor y ubicarlo en csj 
//6. copiar el codigo  


const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Bienvenidos')
})

app.get('/dashboard', (req, res) => {
  res.send('Dashboard principal')
})

app.use((req,res) => {
  res.send("404-Not Found")
})
