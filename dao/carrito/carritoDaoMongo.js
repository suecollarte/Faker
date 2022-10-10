import ContenedorMongoDB from '../../contenedores/ContenedorMongodb.js';

class CarritoDaoMongo extends ContenedorMongoDB {

    constructor(){
        super('carrito',{id: {  type: Number, required: true  },
        timestamp: {type: String,  required: true  },
        productos:{type:[], required:true}
        })
    }

    async save(carrito = {productos:[]}){
        return super.save(carrito)
    }
}

export default CarritoDaoMongo;