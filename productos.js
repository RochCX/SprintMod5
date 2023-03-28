// // id = 29
// const post = fetch("https://slifer.bsite.net/td-sucursal",{
//     method:"GET",
//     headers:{
//         "Content-Type":"application/json"
//     },
// })

// async function obtSucursal (){
//     let response = await post;
//     sucursales = await response.json();
    
// }

// obtSucursal();

// let data;
// let arreglo = [];

// let contenedorProductos = document.querySelector('.contenedorProductos');


// const x = fetch("https://slifer.bsite.net/td-producto",{
//     method:"GET",
//     headers:{
//         "Content-Type":"application/json"
//     },
// })

// async function fetchMethod(){
//     let respuesta = await x;
//     data = await respuesta.json();
//     const items = data.map(prod => new Producto(prod.nombre, prod.descripcion, prod.precio, prod.categoria, prod.stock, prod.imagen, prod.etiqueta, prod.sucursal));


//     items.forEach(element => {
//         const card = document.createElement('div');
//         card.classList = 'card';
//         card.innerHTML = `
//         <div>${element.nombre}</div>
//         <div>${element.categoria}</div>
//         <div>${element.sucursal}</div>
//         `
//         contenedorProductos.appendChild(card);
//     });

// }
// fetchMethod();
// arreglo3filter
// filter por la cucursal
// filter al resultado de la api
//     arreglo nuevo es el que se muestra




// class Producto {
//     constructor(nombre, descripcion, precio, categoria, stock, imagen, etiqueta, sucursal){
//             this.nombre = nombre;
//             this.descripcion = descripcion;
//             this.precio = precio;
//             this.categoria = categoria;
//             this.stock = stock;            
//             this.etiqueta = etiqueta;
//             this.imagen = imagen;
//             this.sucursal = sucursal;
//     }

//     generarHTML () {
//         // Generar el HTML para la tarjeta del producto
//         return `
//         <div class="producto" data-id="${this.nombre}">
//             <img src="${this.imagen}" alt="${this.nombre}">
//             <h3>${this.nombre}</h3>
//             <p>Precio: $${this.precio}</p>
//             <p>Cantidad: ${this.cantidad}</p>
//             <button class="agregar-al-carrito">Agregar al carrito</button>
//         </div>
//     `
//     }
// }
