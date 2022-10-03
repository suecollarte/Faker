const { error } = require('console');

const admin = require("firebase-admin");
const config =require('../utils/config.js');

const serviceAccount = require("./Fire/ecommerce-79314-firebase-adminsdk-9dl37-65d64fba90.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = usuario.firestore;



class ContenedorFirebase {

    constructor (nombrecollec){
          this.colleccion=mongoose.model(nombrecollec)
          
    }

    async getById(j)
    {
              
        
        try{
            
            const doc = await this.colleccion.doc(j).get();
          if (!doc.exists ){
            throw new Error('error al listar')
          }else {
            const result = doc.dta();
            return result
          }
        
        } catch (error){
           throw new Error ('error al listar');
      
        }
    }

    async getAll(){
   
        try{
            result=[];
            let docs = await this.colleccion.get();
           docs.forEach(doc => {
            result.push({id:doc.id,...doc.data()})
           });
           
            return result
          
        }
    
        catch (error){
          return []
    
        }
    
        
    }
    
    async save(e){

        try {
    
            let doc = await this.colleccion.add(e);
            
            return {...e,id: doc.id}
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