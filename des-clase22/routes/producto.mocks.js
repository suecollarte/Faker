import ContenedorMemoria from "../models/ContenedorFS.js";
import { generarProducto } from "../utils/generarDatos.js";

export class ProductoMock extends ContenedorMemoria {
    constructor(){
        super()
    }

    generarDatos(cant = 50){
        let listaPopular = [];
        for (let index = 0; index < cant; index++) {
            listaPopular.push(generarProducto())
        }
        return listaPopular;
    }

    almacenar(listaPopular){
        for (const elemento of listaPopular) {
            let newId = 0;
            if (this.elementos.length == 0) {
                newId = 1
            } else {
                newId = this.elementos[this.elementos.length - 1].id + 1
            }

            this.elementos.push({id: newId, ...elemento})
        }
        return listaPopular;
    }
}

