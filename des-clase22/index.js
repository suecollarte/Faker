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
//const denormalizedProducto = denormalize(normalizedProducto.result, agrupacion, normalizedProducto.entities);
//print(denormalizedProducto)
//console.log('Longitud objeto original: ', JSON.stringify(producto).length)
//console.log('Longitud objeto desnormalizado: ', JSON.stringify(denormalizedProducto).length)
