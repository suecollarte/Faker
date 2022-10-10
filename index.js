import morgan from "morgan";
import { mongoose } from 'mongoose';
import  express from 'express';
import path from 'path';
import dotenv from "dotenv";

/* ---------------------- Instancia de servidor ----------------------*/
const app = express();
/* ---------------------- Middlewares ---------------------- */
app.use(express.static('public'));
app.use(express.json());

// DAO - config
//const ConnName = "configFire.js";
import {config} from './utils/config.js';
dotenv.config();

import {carritoDAO,productosDao}  from './dao/index.js';
//Routes
const router1= express.Router();

router1.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  });
//Rutas

import { CONNREFUSED } from 'dns';
/* ---------------------- Servidor ----------------------*/
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto http://localhost:${PORT}`);
})


