let productosDao;
let carritoDAO;
// aca se maneja el PERS la variable que mueve a la BD
switch (process.env.PERS){
    case "json":
        const {default: ContenedorProducto}= await import('./producto/productoDaoArchivo.js') ;
        const {default: ContenedorCarrito}= await import('./carrito/carritoDaoArchivo.js') ;
        productosDao= new ContenedorProducto();
        carritoDAO =new  ContenedorCarrito();
        break;
    case "firebase":
        const {default: ProductoDAOFire} = await import('./producto/productoDaoFire.js');
        const {default: CarritoDAOFire} = await import('./carrito/carritoDaoFire.js');
        productosDao= new ProductoDAOFire();
        carritoDAO =new  CarritoDAOFire(); 
        break;
    case "mongodb":
        console.log(process.env.PERS);
        const {default:ProductoDaoMongo}= await import('./producto/productoDaoMongo.js') ;
        const {default:CarritoDaoMongo}= await import('./carrito/carritoDaoMongo.js') ;
        productosDao= new ProductoDaoMongo();
        carritoDAO =new  CarritoDaoMongo(); 
        break;
}

export {carritoDAO,productosDao};