let productosDAO;
let carritoDAO;

switch (process.env.PERS){
    case "json":
        const {ContenedorProducto}= require ('../contenedores/ContenedorFS.js') ;
        productosDao= new ContenedorProducto();
        carritoDAO =new  ContenedorProducto();
        break;
    case "firebase":
        const {ProductoDAOFire} = require('./producto/productoDaoFire.js');
        this.productosDao = new  ProductoDAOFire;
        break;
    case "mongodb":
        const {ContenedorProducto}= require ('./producto/productoDaoMongo.js') ;
        productosDao= new ContenedorProducto();
        const {ContenedorCarrito}= require ('./carrito/carritoDaoMongo.js') ;
     
        carritoDAO =new  ContenedorCarrito(); 
        break;
}

module.exports= {carritoDAO,productosDao};