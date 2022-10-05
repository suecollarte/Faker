import  {express} from 'express';
import {exphbs} from 'express-handlebars';
const path = require('path');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');


/*** normalize */
import { denormalize, normalize, schema } from "normalizr"
import { producto } from './utils/data.js';
import { print } from "./utils/functions.js";

const productos = new schema.Entity('productos');

const agrupacion = new schema.Entity('agrupacion', {
    productos: [ producto ]
});


console.log(' ------------- OBJETO NORMALIZADO --------------- ')
const normalizedProducto = normalize(producto, agrupacion);
print(normalizedProducto)

console.log('Longitud objeto original: ', JSON.stringify(producto).length)
console.log('Longitud objeto normalizado: ', JSON.stringify(normalizedProducto).length)

console.log(' ------------- OBJETO DESNORMALIZADO --------------- ')
const denormalizedProducto = denormalize(normalizedProducto.result, agrupacion, normalizedEmpresa.entities);
print(denormalizedProducto)
console.log('Longitud objeto original: ', JSON.stringify(producto).length)
console.log('Longitud objeto desnormalizado: ', JSON.stringify(denormalizedProducto).length)

const schemaUsuario = new schema.Entity('mensaje',{},{idAttribute:'email'});

const schemaMensaje = new schema.Entity('post',{schemaUsuario},{idAttribute:'id'});
const normalizaMensajes=(mensajesConId=>normalize(mensajesConId, schemaMensaje));
/* --- Puerto ---*/
const PORT = 3300;

/* --- Instancia server ---*/
const app = express();
const httpServer = new HttpServer(app);

/* --- Nuestra 'DB' ---*/
const DB_MENSAJE = [];
const DB_PRODUCTOS = [];



/* --- Middlewares express ---*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('./public'));
const routerProducto  = require( "./routes/productos.routes.js");

app.use("api/productos", routerProducto);
/* --- Handlebars ---*/
app.engine(
  'hbs',
  exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs'
  })
);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/* --- Ruta 'Home' ---*/
app.get('/', (req, res) => {
  res.render('home', { DB_PRODUCTOS });
});

/* --- WebSocket ---*/
const io = new IOServer(httpServer);
app.set('socketio', io);

io.on('connection', (socket) => {
  // En cada nueva conexion
  console.log(`Nuevo cliente conectado! -> ${socket.id}`);
  socket.emit('from-server-mensajes', { DB_MENSAJE });
  socket.emit('from-server-producto', { DB_PRODUCTOS });

  // Mensajes chat
  socket.on('from-client-mensaje', (mensaje) => {
    DB_MENSAJE.push(mensaje);
    io.sockets.emit('from-server-mensajes', { DB_MENSAJE });
  });

  // Producto nuevo
  socket.on('from-client-producto', (producto) => {
    DB_PRODUCTOS.push(producto);
    io.sockets.emit('from-server-producto', { DB_PRODUCTOS });
  });
});

/* --- Inicia server ---*/
const server = httpServer.listen(PORT, () => {
  console.log(`Servidor iniciado en -> http://localhost:${PORT}`);
});
server.on('error', (err) => console.log(`error en server ${err}`));
