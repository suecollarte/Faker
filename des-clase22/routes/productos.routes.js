import { Router } from "express";
import { ProductoMock } from "../routes/producto.mock.js";

const usuariosRouter = Router();
const productoApi = new ProductoMock()
productoApi.archivo='../DB/ProductoBD.json';



/* Administracion */
const config={
  isAdmin: true

}
const esAdmin= config.isAdmin;
function administrador(req, res,next){
  if(!esAdmin){
res.status(403).json({code: 403, msg:`No tiene permiso ${req.baseUrl}${req.url}`});

  }
  else {
    next();
  }

}


//Servicios
//Router
routerProducto.get("/", async (req, res) => {
  console.log(productoApi.archivo);
  const productos = await productoApi.getAll();
  console.log("hola");
  //res.json(productos);
  res.json("");
});


routerProducto.get("/api/productos-test",async (req, res) => {

  const cant = req.query.cant;
    res.status(200).json(productoApi.almacenar(productoApi.generarDatos(cant)));

  
} );


routerProducto.get("/:id", async (req, res) => {
  res.json(await productoApi.getById(req.params.id))
});
routerProducto.post("/", administrador, async(req, res) => {
  res.json(await productoApi.save(req.params.id))  
});

routerProducto.put("/:id", administrador, async(req, res) => {
  res.json(await productoApi.save(req.params.id))  
});


routerProducto.delete("/:id", administrador, async(req, res) => {
  res.json(await productoApi.deletebyId(req.params.id))  
});

module.exports = routerProducto;



