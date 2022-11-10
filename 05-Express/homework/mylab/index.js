var express = require('express');
const getHtml = require('./routes/getHtml ');
var app = express();

//-----> Midlewares
app.use(function(req, res, next){
    console.log('Estoy en req.url: ', req.url);
    next()
})

// ahora falta un midleware para leer la respuesta
// ojo si este midlewar nunca voy a poder leer el body
app.use(express.json());

// este se usa cuando se manda datos en html puro
// app.use(express.urlencoded())

// Si espcicifo la ruta solo se usar el midleware para esa ruta ejemplo /users
// app.use('/users',function(req, res, next){
//     console.log('Estoy en req.url: ', req.url);
//     //next()
// })


// ---> Metodos <----
// ---> Get <----

app.get('/', (req, res) => {
    // console.log('Estoy en /');
    res.send('Estoy en /');
})

// comento esot para usarlo modularizado en la carpeta html
// app.get('/html',(req, res) =>{
//     // console.log('Estoy en /html');
//     res.send('<h1>estoy en /html<h1>');
// })

// pruebo el archivo modularizado en la carpeta routes
app.use('/html', getHtml);

app.get('/obj',(req, res) =>{
    // console.log('Estoy en /obj');
    const obj = {nombre: 'Fede', apellido: 'Panella' }
    res.json(obj)
})

app.get('/status', (req, res) => {
    console.log('Estoy en /status');
    res.sendStatus(404)
})

app.get('/msg/status', (req, res) =>{
    console.log('Estoy en /msg/status')
    // res.status(400).send('algo anda mal');
    // res.status(400).json({msg: 'pues no mi ciela'});
    // res.status(400).send('<h1>pues no mi ciela</h1>');
    res.status(400).send({msg: 'Hola'});
})

app.get('/user/:name/:apellido', (req, res) =>{
    res.json({user: req.params.name, apellido: req.params.apellido})
})

app.get('/user/saludar', (req, res) =>{
    console.log('estoy en: /user/saludar');
    res.send('Hola usuario!!');
})

app.get('/user/:name', (req, res) =>{
    res.json({user: req.params.name})
})

// ejemplo de query imdb?=idPeli&apikey=12736
// query?nombre=fede&apellido=panella
app.get('/query', (req, res) => {
    console.log('Soy las QUERIES: ', req.query);
    const {nombre} = req.query;
    console.log('Soy nombre: ', nombre);
    console.log('Soy req.url: ', req.url)
    res.send('Algo')
})

//------> post ---------
// para poder realizar el post (en este caso desde insomia) se necesita un midleware
// REQUEST body--> MIDLEWARE(traduccion)--> Ruta ---> leer el body!(no puede leer mi body)
app.post('/Users', (req, res) => {
    console.log(req.body);
    const {name, lastname}=req.body
    res.send(`Usuario ${name} ${lastname} creado con exito`)
})

app.listen(3000);