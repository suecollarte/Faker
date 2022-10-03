const express = require('express');
const path = require('path');
const morgan = require("morgan");
const dotenv =require("dotenv");
const mongoose = require( 'mongoose');
/* ---------------------- Instancia de servidor ----------------------*/
const app = express();
/* ---------------------- Middlewares ---------------------- */
app.use(express.static('public'));
app.use(express.json());

dotenv.config();

const {productosDAO,carritoDAO} = requiere('../dao/index.js');
//Routes
const router1= express.Router();

router1.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  });
//Rutas
const routerCarrito  = require( "./routes/carrito.routes.js");
const routerProducto  = require( "./routes/productos.routes.js");
const { CONNREFUSED } = require('dns');


app.use("/api/productos", routerProducto);
app.use("/api/carrito", routerCarrito);
/* ---------------------- Servidor ----------------------*/
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto http://localhost:${PORT}`);
})

CRUD();
async function CRUD(){

try{
  // apuntar a modelo firebase
  const db= admin.firestore();
  const usuarios = db.collection('usuarios');

  //operaciones
  const usuariosList=[
    {nombre:"maria",apellido:"33333"},
    {nombre:"pedro",apellido:"4444"}
  ]
  for (const usuario in usuariosList){
    let doc=usuarios.doc();
     await doc.create(usuario);
  }
  console.log("insertados");
  let response =await usuarios.get();
  let usuariosres = response.docs.map((doc = ({
    nombre:doc.data().nombre,
    apellido:doc.data().apellido
  })))
  console.log('usuarios recuperados', usuariosres)

} catch{}

}
