// Variables

let data;
let arreglo = [];
let items;
let urlProducto = "https://slifer.bsite.net/td-producto"
const contenedorProductos = document.querySelector('.contenedorCards');
let nombreProducto = document.querySelector('.nombreProducto');
let descripcionProducto = document.querySelector('.descripcionProducto');
let urlCategoria = "https://slifer.bsite.net/td-categoria"
let categoriaProductos = [{}]
let idProducto;

// Crea cards de los productos obtenidos de la API

async function fetchMethod(){
    let respuesta = await prodFetch;
    data = await respuesta.json();
    const filtrado = data.filter(variable => variable.idSucursal == 9);
    const items = filtrado.map(prod => new Producto(prod.nombre, prod.descripcion, prod.precio, prod.idCategoria, prod.stock, prod.link, prod.etiqueta, prod.idSucursal, prod.id));
    items.forEach(elem => arreglo.push(elem));
    const RellenarProductos = (items) => { 
        items.forEach((producto) => {
            const { nombre, descripcion, precio, idCategoria, stock, link, etiqueta, id} = producto;
            const div = document.createElement('div');
            div.classList = 'card'; 
            div.setAttribute("id","c"+id);
            div.innerHTML = `
                <img src="${link}" class="card-img-top" alt="Productos" />
                <div class = "card__botones">
                    <a href="./editarProducto.html?id=${id}">
                        <ion-icon name="create-outline" class ="editar card__boton" onclick="editarProductoo(${id})" ></ion-icon>
                    </a>
                    <ion-icon name="trash-outline" class ="borrar card__boton" onclick = "borrarProducto(${id})"></ion-icon>
                </div>
                <div class="card-body">
                    <h5 class="card-title card__name">${nombre}</h5>
                    <p class="categoria_prod">Categoria: ${mostrarCategoria(idCategoria)}</p>
                    <p class="card-text card__description">${descripcion}</p>
                    <p class="card-text card__etiqueta">${etiqueta}</p>
                    <p class="price_producto">$${precio}</p>
                    <p class="stock" value="${stock}" hidden>${stock}</p>
                    </div>
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
// Obtiene categorías de la API 

const catFetch = fetch(urlCategoria, {
    method: 'GET',
    headers: {  
        'Content-Type': 'application/json'
    }
})
async function ListadoCategoria () {
    const respuesta = await catFetch
    data = await respuesta.json()
    return data
}

// Guarda en un arreglo de objetos los datos de categoría (id, nombre)

const mostrarDatos = async data => {
    let datos = await data
        for (let i = 0; i < datos.length; i++) {
        categoriaProductos.push({ id: datos[i].id, nombre: datos[i].nombre })
    }}
mostrarDatos(ListadoCategoria())

//Para obtener el nombre de la categoría en función de su id 

const mostrarCategoria = id => { let producto = categoriaProductos.find(item => item.id === id)
    return producto.nombre}


// Método GET para obtener listado de productos 
const prodFetch = fetch("https://slifer.bsite.net/td-producto",{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    },
})

fetchMethod();


// Clase ES6 para productos

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


// Método DELETE para borrar producto seleccionado 

function borrarProducto(ide){
    fetch(`https://slifer.bsite.net/td-producto/${ide}`,{
    method:"DELETE",
    headers:{
        "Content-Type":"application/json"
    }, 
});
// Recarga la página de productos
    setTimeout(function(){
        location.reload();
    }, 500);

}

// Edita producto 
async function editarProductoo(ide){
    await fetchMethod;
    let objFinder = arreglo.find(elemento => elemento.id == ide);
    // console.log(objFinder);
    localStorage.setItem("modificarEste", JSON.stringify(objFinder));
}


// Barra de busqueda.

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const display = document.getElementById('display');

searchBtn.addEventListener('click', async () => {
  let query = searchInput.value;
  display.innerHTML = '';
  let data = await fetchData();
  data.forEach((product) => {
    let hidden = document.getElementById("c"+product.id);
    let searchTag = product.etiqueta.search(query);
    let searchDesc = product.descripcion.search(query);
    if (query === product.nombre || searchTag>-1 || searchDesc >-1){
        hidden.style.display = 'flex';
     }else{
        hidden.style.display = 'none';
     }
  });
});
async function fetchData() {
  const response = await fetch(`https://slifer.bsite.net/td-producto/idSucursal/9`);
  return response.json();
}




