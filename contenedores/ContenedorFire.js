const { error } = require('console');

const admin = require("firebase-admin");
const config =require('../utils/config.js');

const serviceAccount = require("./Fire/ecommerce-79314-firebase-adminsdk-9dl37-65d64fba90.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = usuario.firestore;



class ContenedorFirebase {

    constructor (db,colleccion){
      this.db= db.amin.firestore()
      this.colleccion=db.collection(colleccion)
          
    }
    static BD= this.db;
    static coll = this.colleccion;
    async getById(j)
    {
              
        
        try{
            
            const doc = await coll.doc(j).get();
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
          let response = await coll.get();
          let result = response.docs.map((doc)=>({
            id: doc.id,
            timestamp: doc.data().timestamp
          }))
      
           
            return result
          
        }
    
        catch (error){
          return []
    
        }
    
        
    }
    
    async save(e){

        try {
    
            let doc = await coll.doc;
            
            await doc.create(e);
        } 
        catch (err){
    
            throw new Error (`Error:${error}`) 
    
        }
    
    }
    
    

    async deleteAll(){
/// ````
        try {
          id='*';
          doc=BD.doc(`${id}`);
          await doc.delete();
        }   
        catch (err){
    
            throw new Error (`Error:${error}`) 
        
            }
    
}



    async deletebyId(j){
    
    
    try {
    
     
      
      doc=BD.doc(`${j}`);
      await doc.delete();
    
        } 
        catch (err){
    
        console.log('error',err);
    
        }

    
    
}
}


export default ContenedorFire;