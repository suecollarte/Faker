const { error } = require('console');

const fs =require('fs').promises;


class ContenedorProducto {

    constructor (tablaModel){
          this.tablaModel=tablaModel
          
    }

    async getById(j)
    {
        const todo= await this.getAll();
        
        
        try{
          const encontrar = todo.find(elemento => elemento.id == j)
        
        console.log(encontrar);  
            
            return encontrar    
        } catch (error){
            return []
      
        }
    }

    async getAll(){
   
        try{
    
            const datos= await tablaModel.find();          
            return datos;
        }
    
        catch (error){
          return []
    
        }
    
        
    }
    
    async save(e){

        try {
    
            await tablaModel.insertMany(e);
            console.log('insertados!');
        } 
        catch (err){
    
            throw new Error (`Error:${error}`) 
    
        }
    
    }
    
    

    async deleteAll(){

        try {
            await tablaModel.deleteMany();
        }   
        catch (err){
    
            throw new Error (`Error:${error}`) 
        
            }
    
}



    async deletebyId(j){
    
    
    try {
    
        await usuarioModel.deleteOne(j)
    
        } 
        catch (err){
    
        console.log('error',err);
    
        }

    
    
}
}


module.exports=ContenedorProducto;