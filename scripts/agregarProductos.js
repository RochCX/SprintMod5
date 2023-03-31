// Variables
let urlProducto = "https://slifer.bsite.net/td-producto"
let urlCategoria = "https://slifer.bsite.net/td-categoria"
let listaCategoria = [];
let nombresCategoria = [];
let nuevoItem;

// Obtiene categorías de la API

const catFetch = fetch(urlCategoria, {
    method:"GET",
    headers:{
        "Content-Type": "application/json"
    },
})

//Crea opciones de un input select con los nombres de categorías

async function prepCategoria() {
    const respuesta = await catFetch;
    data = await respuesta.json();
    // console.log(data);
    data.forEach(elem => {
        listaCategoria.push(elem);
    })
    listaCategoria.forEach((opcion) => {
        const elemOpcion = document.createElement("option");
        elemOpcion.id = opcion.id;
        elemOpcion.value = opcion.nombre;
        elemOpcion.text = opcion.nombre;
        document.getElementById("selectCat").appendChild(elemOpcion);
    });
}
prepCategoria();


const formularioAgregar = document.getElementById("formulario");

// Validaciones para formulario de agregar productos

formularioAgregar.addEventListener("submit", async (event) =>{
    event.preventDefault();
    await prepCategoria;
    const inputNombre = document.getElementById("nombre").value;
    const largoNombre = inputNombre.trim().length;
    const inputDescripcion = document.getElementById("descripcion").value;
    const largoDescripcion = inputDescripcion.trim().length;
    const inputPrecio = document.getElementById("precio").value;
    const inputCategoria = document.getElementById("selectCat");
    const inputStock = document.getElementById("stock").value;
    const inputImagen = document.getElementById("imagen").value;
    const inputEtiqueta = document.getElementById("etiqueta").value;
    const largoEtiqueta = inputEtiqueta.trim().length;
    // procesos verificantes
    if (largoNombre >= 50 ) {
        alert("Agregue un nombre, de no mas de 50 carácteres");
        return;
    } else if (largoDescripcion >= 500){
        alert("Agregue una descripción, de no mas de 500 caracteres");
        return;
    } else if (largoEtiqueta >= 500){
        alert("Agregue etiquetas, de no mas de 500 caracteres");
        return;
    } else if (inputCategoria.value == ""){
        alert("Selecione una categoria");
        return;
    } else if (parseInt(inputPrecio) <= 0 || parseInt(inputStock) <=0){
        alert ("Precio y Stock deben ser enteros y positivos");
        return
    } else {
        let encontrar = listaCategoria.find(elem => elem.nombre == inputCategoria.value);
        nuevoItem = new Producto(inputNombre, inputDescripcion, inputPrecio, encontrar.id, inputStock, inputImagen, inputEtiqueta, 9, 0);
        console.log(nuevoItem); //con esto se puede hacer la funcion mandando solamente esta clase
    }
    agregarProducto();
});

// Agrega producto en la API 

async function agregarProducto(){
    let obj = {
        "id": 0,
        "nombre": nuevoItem.nombre,
        "precio": nuevoItem.precio,
        "link": nuevoItem.link,
        "stock": nuevoItem.stock,
        "etiqueta": nuevoItem.etiqueta,
        "descripcion": nuevoItem.descripcion,
        "idCategoria": nuevoItem.idCategoria,
        "idSucursal": nuevoItem.idSucursal
      }
    //   console.log(obj)
    await fetch(urlProducto, {
        method: 'POST',   
        mode: 'cors', 
        cache: 'no-cache',
        credencials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            "id": 0,
            "nombre": nuevoItem.nombre,
            "precio": nuevoItem.precio,
            "link": nuevoItem.link,
            "stock": nuevoItem.stock,
            "etiqueta": nuevoItem.etiqueta,
            "descripcion": nuevoItem.descripcion,
            "idCategoria": nuevoItem.idCategoria,
            "idSucursal": nuevoItem.idSucursal
          })
    });
      //Recarga la página de productos
    
      setTimeout(function(){
        localStorage.setItem("recarga", 0);
        window.location.href = "./productos.html"; }, 1000);    
        
}

// Clase producto en ES6

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