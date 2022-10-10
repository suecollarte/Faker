import { faker } from '@faker-js/faker';

export function generarProducto() {
    return {
       
        id:faker.producto.id(),
        nombre: faker.producto.nombre() ,
        descripcion: faker.producto.descripcion(),
        codigoprod:faker.producto.codigoprod() ,
        precio: faker.producto.precio() ,
        stock: faker.producto.stock() ,
        foto: faker.producto.foto()
    }
}
