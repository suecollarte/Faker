import  ContenedorArchivo from '../../contenedores/ContenedorFS.js';

class ProductoDaoArchivo extends ContenedorArchivo{

    constructor(){
        super('../../DB/ProductoBD.json')
        
    }

    async desconectar(){

    }
}

export default ProductoDaoArchivo;