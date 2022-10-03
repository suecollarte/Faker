const ContenedorProductoFire = require('../../contenedores/ContenedorFire.js');

class ProductoDaoFire extends ContenedorProductoFire {

    constructor(){
        super('productos')
        
    }

    
}

module.exports= ProductoDaoFire;