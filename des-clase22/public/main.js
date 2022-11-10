const socket =  io();



socket.on('from-server-mensaje', (datos) => {
    
    if (datos.MENSAJE_DB.lenght ==0){
       renderMensjVacio();
       return;
    } 
  
    renderMensaje(datos.MENSAJE_DB); 
    
});
socket.on('from-server-producto', (datos) => {
    
    if (datos.PRODUCTO_DB.lenght ==0){
       renderProdVacio();
       return;
    } 
  
    renderProd(datos.PRODUCTO_DB); 
    
});
function renderProdVacio() {
    const htmlCuerpo = '<h3 class="alert alert-warning">No hay productos</h3>';
    document.querySelector('#historial').innerHTML = htmlCuerpo;
  }
  function renderMensjVacio() {
    const htmlCuerpo = '<h3 class="alert alert-warning">No hay mensajes</h3>';
    document.querySelector('#historial').innerHTML = htmlCuerpo;
  }

  
function renderProd(productos) {
    const HistoriaProd = productos.map((prod)=>{
     return (`<tr>
     <td>${prod.nombre}</td>
     <td>${prod.precio}</td>
     <td><img src="${prod.imagenPro}" width="50px"></td><tr>`)
    }).join(''); 
    
  const table =
  '<div class="table-responsive">'+
  '<table class="table table-dark">'+
  '<tr style="color: yellow;"> '+
  ' <th>Nombre</th> <th>Precio</th>'+   
  '<th>Imagen</th> </tr>' +
  HistoriaProd +
  '</table></div>';
    document.querySelector('#historial').innerHTML = table;
}
function rendermensaje(mensajes) {
    const mensj= mensajes.mensj;
    const HistoriaMsj= mensj.map((prod)=>{
        
     return (`<tr>
     <td>${prod.id}</td>
     <td>${prod.nombre}</td>
     <td>${prod.apellido}</td>
     <td>${prod.edad}</td>
     <td>${prod.alias}</td>
     <td>${prod.link}</td>
     <tr>`)
    }).join(''); 
    
  const table =
  '<div class="table-responsive">'+
  '<table class="table table-dark">'+
  '<tr style="color: yellow;"> '+
  ' <th></th> <th></th>'+   
  '<th></th> </tr>' +
  HistoriaMsj +
  '</table></div>';
    document.querySelector('#mensajes').innerHTML = table;
}

function enviarProducto() {
   
    const inputProducto = document.querySelector('#nombre');
    const inputPrecio = document.querySelector('#precio');
    const inputimagenPro = document.querySelector('#imagenProd');
    const inputDescrProducto = document.querySelector('#descrProducto');
    const inputStock = document.querySelector('#stockProd');
    const inputid = document.querySelector('#idProducto');

 
    const Fproducto = {
        id: inputid.value,
        nombre: inputProducto.value,
        precio: inputPrecio.value,
        descrpro: inputDescrProducto.value,
        stock: inputStock.value,
        imagenPro : inputimagenPro.value
    }

   socket.emit('from-client-producto', Fproducto);
}

function enviarMensaje() {
   
    const inputid = document.querySelector('#id');
    const inputnombre = document.querySelector('#nombre');
    const inputapellido = document.querySelector('#apellido');
    const inputedad = document.querySelector('#edad');
    const inputalias = document.querySelector('#alias');
    const inputlink = document.querySelector('#link');
  

 
    const Fproducto = {
        id: inputid.value,
        nombre: inputnombre.value,
        apellido: inputapellido.value,
        edad: inputedad.value,
        link: inputlink.value,
        alias : inputalias.value
    }

   socket.emit('from-client-mensaje', Fmensajes);
}

/* socket.on('from-server-carrito', (datos) => {
    
    if (datos.CARRITO_DB.lenght ==0){
        renderCarrVacio();
        return;
     } 
    renderCarrito(datos.CARRITO_DB); 
    
}); */

function renderCarrVacio() {
    const htmlCuerpo = '<h3 class="alert alert-warning">No hay </h3>';
    document.querySelector('#carritos').innerHTML = htmlCuerpo;
  }

function renderCarrito(carrito) {
    
    const HtmlCarrito= carrito.map((carro)=>{
        
        return (`<tr><td style='color:green;'>
        <b>${carro.idCarrito}: </b></td><td style='color:blue;'>
        <b>${carro.nombreC}: </b></td>
        <td style='color:#804000;'>${carro.descripcionC}</td>
        <td style='color:green;font-style: italic;'>${carro.stockC} </td></tr>`)
    }).join(''); 
    const tabla =
    '<div class="table-responsive">'+
    '<table class="table table-dark">'+
    '<tr style="color: yellow;"> '+
    ' <th>Nombre</th> <th>Descripcion</th>'+   
    '<th>Stock</th> </tr>' +
    HtmlCarrito +
    '</table></div>';
    document.querySelector('#carritos').innerHTML = tabla;
}


function enviarCarrito() {
    
   
    const inputidCarrito = document.querySelector('#idCarrito');
    const inputnombre = document.querySelector('#nombreC');
    const inputdescripcion = document.querySelector('#descripcionC');
    const inputcodigo = document.querySelector('#codigoC');
    const inputstock = document.querySelector('#stockC');
    const inputprecio = document.querySelector('#precioC');
    const inputfoto = document.querySelector('#fotoC');
    const date= new Date();
    const usuarios = {
        id: inputidCarrito.value,
        timestamp: date.now,
        productos:[{
        nombre: inputnombre.value,
        descripcion: inputdescripcion.value, 
        codigo: inputcodigo.value, 
        stock: inputstock.value, 
        precio: inputprecio.value, 
        foto: inputfoto.value
        }]
    }
   socket.emit('from-client-carrito', usuarios);
}
