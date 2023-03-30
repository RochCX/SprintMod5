let data;
let arreglo = [];
let items;
let urlProducto = "https://slifer.bsite.net/td-producto"
const contenedorProductos = document.querySelector('.contenedorCards');
let nombreProducto = document.querySelector('.nombreProducto');
let descripcionProducto = document.querySelector('.descripcionProducto');



let idProducto;


const prodFetch = fetch("https://slifer.bsite.net/td-producto",{
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
fetchMethod();

async function fetchMethod(){
    let respuesta = await prodFetch;
    data = await respuesta.json();
    const filtrado = data.filter(variable => variable.idSucursal == 9);
    const items = filtrado.map(prod => new Producto(prod.nombre, prod.descripcion, prod.precio, prod.idCategoria, prod.stock, prod.link, prod.etiqueta, prod.idSucursal, prod.id));
    items.forEach(elem =>
        arreglo.push(elem));
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
                    <p class="categoria_prod">Categoria: ${idCategoria}</p>
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
        
        const cards = document.querySelectorAll('.card');
        
}

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
async function editarProductoo(ide){
    await fetchMethod;
    console.log(arreglo);
    let objFinder = arreglo.find(elemento => elemento.id == ide);
    console.log(objFinder);
    localStorage.setItem("modificarEste", JSON.stringify(objFinder));
    // setTimeout(function(){
    //     console.log("Espera");
    // }, 3000);
    
}



//Barra de busqueda.

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




