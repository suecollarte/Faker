const {options } = require('../DB/BD.js');
const knex = require('knex')(options);

class ContenedorProducto {
    async getById(j)
    {
        try{
            knex.from('carro').select("*")
            .then((rows) => {
            for (row of rows){
                console.log(`${row['id']} ${row['fecha']}  ${row['montototal']}`)
            }
            })
            .catch((err) => {console.log(err);throw err})
            .finally(() =>{
                knex.destroy();
            })
            return rows    
        } catch (error){
            return []
      
        }
    }

    async getAll(){
    
        try{

            let rows= await knex.from('carro').select("*")
            .then((rows) => {
            for (row of rows){
                console.log(`${row['id']} ${row['fecha']}  ${row['montototal']}`)
            }
            })
            .catch((err) => {console.log(err);throw err})
            .finally(() =>{
                knex.destroy();
            })
 
            
            return rows;
        }
    
        catch (error){
          return []
    
        }
    
        
    }
    
   
    
    async save(e){
          try {
    
         await   knex('carro').insert(e)
        .then(() => console.log("dato insertado"))
        .catch((err) => {console.log(err);throw err})
        .finally(() =>{
        knex.destroy();
    })
        
        } 
        catch (err){
    
            throw new Error (`Error:${error}`) 
    
        }
    
    }
    
    

    async deleteAll(){

        try {
            await knex.from('carro').del()
            .then(() => console.log("dato datos borrados"))
            .catch((err) => {console.log(err);throw err})
            .finally(() =>{
                knex.destroy();
            })
        }   
        catch (err){
    
            throw new Error (`Error:${error}`) 
        
            }
    
}



    deletebyId(j){
    
 
    try {
    
        knex.from('carro').where('id','=', j).del()
        .then(() => console.log("dato datos borrados"))
        .catch((err) => {console.log(err);throw err})
        .finally(() =>{
            knex.destroy();
        })
       
        console.log('Borrado');
    
        } 
        catch (err){
    
        console.log('error',err);
    
        }

    
    
}
}


module.exports ={ContenedorProducto};