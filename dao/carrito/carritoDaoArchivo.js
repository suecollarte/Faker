import  ContenedorArchivo from '../../contenedores/ContenedorFS.js';

class CarritoDaoArchivo extends ContenedorArchivo{

    constructor(){
        super('../../DB/CarrittoBD.json')
        
    }

    async desconectar(){
        
    }
}

export default CarritoDaoArchivo;