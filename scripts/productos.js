let data;
let arreglo = [];
let items;
const contenedorProductos = document.querySelector('.contenedorCards');

const x = fetch("https://slifer.bsite.net/td-producto",{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    },
})
    // .then(res=>{
    //     if(!res.ok){
    //         console.log("error");
    //         return;
    //     }
    //     return res.json();
    // })
    // .then(data=>{
    //     console.log("exito");
    //     console.log(data);
    // })
    // .catch(error =>{
    //     console.log(error);
    // })

async function fetchMethod(){
    let respuesta = await x;
    data = await respuesta.json();
    const filtrado = data.filter(variable => variable.idSucursal == 9);
    const items = filtrado.map(prod => new Producto(prod.nombre, prod.descripcion, prod.precio, prod.idCategoria, prod.stock, prod.imagen, prod.etiqueta, prod.idSucursal));
    console.log(items);
    const RellenarProductos = (items) => { 
        items.forEach((producto) => {
            const { nombre, descripcion, precio, idCategoria, stock, imagen, etiqueta} = producto;
            const div = document.createElement('div');
            div.classList = 'col g-5 hidden';
            div.innerHTML = `
            <div class="card">
                <img src="${"."+imagen}" class="card-img-top" alt="Productos" />
                <div class="card-body">
                    <h5 class="card-title card__name">${nombre}</h5>
                    <p class="categoria_prod">Categoria: ${idCategoria}</p>
                    <p class="card-text card__description">${descripcion}</p>
                    <p class="card-text card__etiqueta">${etiqueta}</p>
                    <p class="price_producto">${precio}</p>
                    <label class="form-label" for="cantProducto">Cantidad:<input type="number" value = "1" class="form-control" min="0" /></label>
                    <p class="stock" value="${stock}" hidden>${stock}</p>
                    </div>
                <div class="card__end">
                    <a href="#" class="button--secondary button--card">Agregar al Carro</a>
                </div>
            </div>
            `;
            contenedorProductos.appendChild(div);
        });
        };
                    
        if (contenedorProductos) {
            RellenarProductos(items);
        }
        
        const cards = document.querySelectorAll('.card');
//     class Producto {
//         constructor(nombre, descripcion, precio, categoria, stock, imagen, etiqueta){
//             this.nombre = nombre;
//             this.descripcion = descripcion;
//             this.precio = precio;
//             this.categoria = categoria;
//             this.stock = stock;
//             this.imagen = imagen;
//             this.etiqueta = etiqueta;
    
//     }
// }
}
fetchMethod();

class Producto {
    constructor(nombre, descripcion, precio, idCategoria, stock, imagen, etiqueta, idSucursal){
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.precio = precio;
            this.idCategoria = idCategoria;
            this.stock = stock;            
            this.etiqueta = etiqueta;
            this.imagen = imagen;
            this.idSucursal = idSucursal;
            }}




    