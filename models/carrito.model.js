//import { Schema, model} from "mongoose";
const Schema = mongoose.Schema;

const carritoSchema = new Schema({
    idcarrito: Number,
    timestamp:String,
    productos:[
        {
    id: Number,
    timecarrito:  String,   
    nombre:  String,     
    descripcion:  String,   
    codigoprod: String,   
    precio: Number,    
    stock:  Number,   
    foto: String,
        }]
})
//export const carritoModel = model('carritos', carritoSchema);
module.exports = Carrito = mongoose.model('carrito', carritoSchema);