import ContenedorMongoDB from '../../contenedores/ContenedorMongodb.js';

class ProductoDaoMongo extends ContenedorMongoDB {

    constructor(){
        super('producto',{
            id: {  type: Number, required: true  },
            timeproducto: {type: String,  required: true  },
            nombre: {  type: String,  required: true  },
            descripcion: {  type: String,  required: true  },
            codigoprod: {  type: String,  required: true  },
            precio: {  type: Number,  required: true, default: 0  },
            stock: {  type: Number,  required: true,default: 0  },
            foto: {  type: String,  required: true }
        })
    }

}

export default ProductoDaoMongo;