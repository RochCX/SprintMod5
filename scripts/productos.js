let data;
let arreglo = [];
let items;
const contenedorProductos = document.querySelector('.contenedorCards');
let nombreProducto = document.querySelector('.nombreProducto');
let descripcionProducto = document.querySelector('.descripcionProducto');



let idProducto;

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
    const items = filtrado.map(prod => new Producto(prod.nombre, prod.descripcion, prod.precio, prod.idCategoria, prod.stock, prod.link, prod.etiqueta, prod.idSucursal, prod.id));
    console.log(items);
    const RellenarProductos = (items) => { 
        items.forEach((producto) => {
            const { nombre, descripcion, precio, idCategoria, stock, link, etiqueta, id} = producto;
            const div = document.createElement('div');
            div.classList = 'card';
            div.innerHTML = `
                <img src="${link}" class="card-img-top" alt="Productos" />
                <div class = "card__botones">
                    <a href="./editarProducto.html?id=${id}">
                        <ion-icon name="create-outline" class ="editar card__boton" ></ion-icon>
                    </a>
                    <ion-icon name="trash-outline" class ="borrar card__boton" onclick = "borrarProducto(${id})"></ion-icon>
                </div> 
                <div class="card-body">
                    <h5 class="card-title card__name">${nombre}</h5>
                    <p class="categoria_prod">Categoria: ${idCategoria}</p>
                    <p class="card-text card__description">${descripcion}</p>
                    <p class="card-text card__etiqueta">${etiqueta}</p>
                    <p class="price_producto">$${precio}</p>
                    <p class="stock" value="${stock}" hidden>${stock}</p>
                </div>
                
            `;

            contenedorProductos.appendChild(div);
            // Agrega evento borrar 
        });
        };
                    
        if (contenedorProductos) {
            RellenarProductos(items);
        }
    
}
fetchMethod();

class Producto {
    constructor(nombre, descripcion, precio, idCategoria, stock, link, etiqueta, idSucursal, id){
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.precio = precio;
            this.idCategoria = idCategoria;
            this.stock = stock;            
            this.etiqueta = etiqueta;
            this.link = link;
            this.idSucursal = idSucursal;
            this.id = id;
            }}


function borrarProducto(ide){
    fetch(`https://slifer.bsite.net/td-producto/${ide}`,{
    method:"DELETE",
    headers:{
        "Content-Type":"application/json"
    }, 
});

    setTimeout(function(){
        location.reload();
    }, 500);

    // window.location.href = "./productos.html";
}
