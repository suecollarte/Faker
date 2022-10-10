import { error } from 'console';
import { rename } from 'fs';
import {mongoose} from 'mongoose';
import {config}  from '../utils/config.js';

const strConn = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.dbName}`
//const conn = await mongoose.connect(strConn, config.db.options);
await mongoose.connect(strConn,config.mongodb.options);
class ContenedorMongoDB {

    constructor (tablaModel, schema){
          this.colleccion=mongoose.model(tablaModel, schema)
          
    }

    async getById(j)
    {
              
        
        try{
          const docs = await this.colleccion.find({'id':j })
          if (docs.lenght == 0 ){
            throw new Error('error al lisar')
          }else {
            const result = JSON.parse(JSON.stringify(j));
            return result
          }
        
        } catch (error){
           throw new Error ('error al listar');
      
        }
    }

    async getAll(){
   
        try{
    
            let docs = await this.colleccion.find({}).lean();
           
           
            return docs
          
        }
    
        catch (error){
          return []
    
        }
    
        
    }
    
    async save(e){

        try {
    
            let doc = await this.colleccion.create(e);
            doc = JSON.parse(JSON.stringify(doc));
            
            console.log('insertados!');
            return doc
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

export default ContenedorMongoDB;
