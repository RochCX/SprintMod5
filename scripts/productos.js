let data;
let arreglo = [];
let items;
let urlProducto = "https://slifer.bsite.net/td-producto"
const contenedorProductos = document.querySelector('.contenedorCards');

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
    console.log(items);
    const RellenarProductos = (items) => { 
        items.forEach((producto) => {
            const { nombre, descripcion, precio, idCategoria, stock, link, etiqueta, id} = producto;
            const div = document.createElement('div');
            div.classList = 'col g-5 hidden';
            div.innerHTML = `
            <div class="card">
                <img src="${link}" class="card-img-top" alt="Productos" />
                <div class="card-body">
                    <h5 class="card-title card__name">${nombre}</h5>
                    <p class="categoria_prod">Categoria: ${idCategoria}</p>
                    <p class="card-text card__description">${descripcion}</p>
                    <p class="card-text card__etiqueta">${etiqueta}</p>
                    <p class="price_producto">${precio}</p>
                    <p class="stock" value="${stock}" hidden>${stock}</p>
                    </div>

                <div class = "botones">
                
                    <a href="./editarProducto.html">
                        <ion-icon name="create-outline" class ="editar" onclick = "editarProductoo(${id})"></ion-icon>

                    </a>
                    <ion-icon name="trash-outline" class ="borrar" onclick = "borrarProducto(${id})"></ion-icon>
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

async function modificarProductos(modificarID) {
    freno == true;
    if (freno == false) {
    await fetch(urlProducto, {
        method: 'PUT',   
        mode: 'cors', 
        cache: 'no-cache',
        credencials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            "id": modificarID,
            "nombre": "WACOM ONE 13 CREATIVE PEN DISPLAY",
            "precio": 374990,
            "link": "../img/p01.jpg",
            "stock": 7,
            "etiqueta": "tableta digital wacom arte tecno escritorio profesional Hola!",
            "descripcion": "una tableta digitalizadora con una pantalla de 13 pulgadas y lápiz digital que permite a los usuarios dibujar y crear arte digital.",
            "idCategoria": 5,
            "idSucursal": 9
        })
    })}
}
// modificarProductos(1043);

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
    console.log(ide);
}


function editarProductoo(ide){
    idProducto = ide;
    // localStorage.setItem('idProducto', idProducto);

    nombreProducto = document.querySelector('.nombreProducto');
    descripcionProducto = document.querySelector('.descripcionProducto');


    const ed = fetch("https://slifer.bsite.net/td-producto",{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    },
    })

    async function editar(){
        let respuesta = await ed;
        prod = await respuesta.json();
        const filtradoProd = prod.filter(variable => variable.id == ide);
        console.log(filtradoProd);


    }

    editar(ide);

}



