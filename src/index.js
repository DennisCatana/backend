/* Pasos */

//1. npm init --y
//2. npm i express
//3. nom i mongoose para una libreria 
//4. ir ar: https://nodejs.org/api/http.html#http
//5. buscar crear un servvidor y ubicarlo en csj 
//6. copiar el codigo  

//-------------------------------------
                  /* CLASE 08 */
                    /* RUTAS */

const express = require('express')
const {engine} = require('express-handlebars')
const app = express()
const port = 3000

/*app.get('/', (req, res) => {
  res.send('Bienvenidos')
})

app.get('/dashboard', (req, res) => {
  res.send('Dashboard principal')
})

app.use((req,res) => {
  res.send("404-Not Found")
})*/

//----------------------------------------------------------
                        /* REGISTRO */
/* Mandar info en Json
app.get -> obtener
app.post -> Registrar
app.put -> ¿Actua
app.delete -> Registrar

app.use(express.json())

app.post('/register',(req,res)=>{

  const {pedido, Solicitado} = req.body
  res.send(`El pedido de ${pedido} es realizado por ${Solicitado}`)
})*/

//----------------------------------------------------------
                          /* OBTENER */
/*app.get('/pedido/:abc',(req,res)=>{
  res.send(`El pedido es hamburguesa ${req.params.abc}`)
})

app.get('/hamburguesa/simple',(req,res)=>{
  res.send("Un perro")
})

console.log(__dirname)

app.get('/hamburguesa/perro',(req,res)=>{
  res.sendFile('./dog.gif',{
  })
})

app.get('/hamburguesa/word',(req,res)=>{
  res.sendFile('./fp-001_formato_solicitud_pr_cticas_preprofesionales (1).docx',{
   
  })
})

app.get('/hamburguesa/json',(req,res)=>{
 res.status(200).json({
  "estado":"cansado",
  "Quisiera":"irme"
 })
})*/

//-------------------------------------------------------------

/*Usar un motor de plantillas
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
//Unicacion del directorio views
app.set('views', './src/views');

app.get('/pepin/vegana',(req,res)=>{
  res.render('home')
})

app.get('/pepin/about',(req,res)=>{
  res.render('about')
})*/

//-------------------------------------------------------------
                         /*CLASE 9  */
                      /* MIDELWAR */

/*app.use(express.json())
app.get('/entrada',(req,res)=>{
   res.render('Entrada al local')
})

//CREAR UN MIDDLEWARE

app.use((req,res,next)=>{
  const{email,password} = req.body
  if(email=="dennis@gmail.com" && password=="123"){
    next()
  }else{
    res.send("Usuario no registrado")
  }
})*/

//-------------------------------------------------------------

app.get('/',(req,res)=>{
  res.send('Landing Page')
})

app.get('/dashboard',(req,res)=>{
  res.send('Landing Page')
})


app.get('/pedido',(req,res)=>{
  res.send(`Bienvenido -- ${req.body.email} Listo para tomar su orden`)
})






app.listen(port, () => {
  console.log(`usted esta en el puerto ${port}`)
})