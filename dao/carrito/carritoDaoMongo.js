const ContenedorProductoMongo = require('../../contenedores/ContenedorMongodb.js');

class CarritoDaoMongo extends ContenedorProductoMongo {

    constructor(){
        super('carritos',{
            productos:{type:[], required:true}
        })
    }

    async save(carrito = {productos:[]}){
        return super.save(carrito)
    }
}

module.exports= CarritoDaoMongo;