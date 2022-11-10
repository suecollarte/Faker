import  express from 'express';
import exphbs from 'express-handlebars';
import * as path from 'path';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { fileURLToPath } from "url";


import dotenv from 'dotenv';
/*** normalize */
import { producto } from './utils/data.js';
import { print } from "./utils/functions.js";

import { schema, normalize, denormalize } from "normalizr";
import util from 'util';

const mensajesData = {
 
    mensj:[{
    text: 'mensaje del usuario',
    author: 
      {
        id: "1@cc.cl",
        nombre:'Mario',
        apellido: "Robins",
        edad: 35,
        alias: "useriatico",
        avatar:'https://img.freepik.com/vector-premium/mujer-avatar-mujer-negocios_38295-63.jpg'
      }}
      ,
     { text: 'mensaje del usuario',
    author:
      {
        id: "2@cc.cl",
        nombre:'Maria',
        apellido: "Robins",
        edad: 36,
        alias: "useriatico",
        avatar:'https://img.freepik.com/vector-premium/mujer-avatar-mujer-negocios_38295-63.jpg'
      }}
      ,
      { text: 'mensaje del usuario',
    author:{
        id: "3@cc.cl",
        nombre:'Marco',
        apellido: "Robinson",
        edad: 45,
        alias: "useriatico",
        avatar:'https://img.freepik.com/vector-premium/mujer-avatar-mujer-negocios_38295-63.jpg'
      }}
    ]
  };
   

const textSchema = new schema.Entity('mesj');
const postSchema = 
//new schema.Entity('posts', 
{  
  usuarios: [textSchema]
};

const normalizedData = normalize(mensajesData, postSchema);


console.log(
    util.inspect(normalizedData, false, 12, true),
    JSON.stringify(normalizedData).length
);

const denormalizedData = denormalize(normalizedData.result, postSchema, normalizedData.entities);

console.log(
    util.inspect(denormalizedData, false, 12, true),
    JSON.stringify(denormalizedData).length
);

const longO = JSON.stringify(mensajesData).length
console.log('Longitud objeto original', longO);

const longN = JSON.stringify(normalizedData).length
console.log('Longitud objeto normalizado', longN);

const longD = JSON.stringify(denormalizedData).length
console.log('Longitud objeto denormalizado', longD);

const porcentaje = ((longN*100)/longO).toFixed(2)
console.log(`Porcentaje de compresion: ${porcentaje}%`)

//session persistencia mongo
const config ={
  db:{
      host:'localhost',
      port: 27017,
      dbName: 'ecommerce',
      options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          serverSelectionTimeoutMS: 5000
      }

  }

}

dotenv.config();
const app = express();



/* --- Middlewares express ---*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('./public'));


/* --- Handlebars ---*/
import { engine } from 'express-handlebars';
app.engine('hbs', engine({
  defaultLayout: 'main',
  layoutsDir: './views/layouts',
  partialsDir: './views/partials',
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views');
//app.set("views", path.resolve(__dirname, "./views"));


const obj1=JSON.stringify(normalizedData);
app.get('/', (req, res) => {
  
    res.render("mensajes"
  );

    
});

/* ---------------------- WebSocket ----------------------*/
// Import de httpServer y socketIo
import { Server as HttpServer } from 'http';
import { Server as IOServer } from 'socket.io';


const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);


io.on("connection", (socket)=>{

  console.log(`Nuevo cliente conectados! ${socket.id}`);
  
    socket.emit('from-server-mensaje', {mensajesData});
  
   socket.on('from-client-mensaje', mensaje => {
    mensajesData.push(mensaje);
     io.sockets.emit('from-server-mensaje', {mensajesData});
   });

})

/* ---------------------- Server ---------------------- */
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});