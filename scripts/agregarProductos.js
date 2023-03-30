let urlProducto = "https://slifer.bsite.net/td-producto"
let urlCategoria = "https://slifer.bsite.net/td-categoria"
let listaCategoria = [];
let nombresCategoria = [];
let pruebaIMG = "String";
let nuevoItem;

const catFetch = fetch(urlCategoria, {
    method:"GET",
    headers:{
        "Content-Type": "application/json"
    },
})


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

// const prodFetch = fetch("https://slifer.bsite.net/td-producto",{
//     method:"GET",
//     headers:{
//         "Content-Type":"application/json"
//     },
// })

const formularioAgregar = document.getElementById("formAdd");

formularioAgregar.addEventListener("submit", async (event) =>{
    // anteponer un validador
    event.preventDefault();
    await prepCategoria;
    const inputNombre = document.getElementById("add1").value;
    const largoNombre = inputNombre.trim().length;
    const inputDescripcion = document.getElementById("add2").value;
    const largoDescripcion = inputDescripcion.trim().length;
    const inputPrecio = document.getElementById("add3").value;
    const inputCategoria = document.getElementById("selectCat");
    const inputStock = document.getElementById("add5").value;
    // const inputImagen = document.getElementById("add6");
    // nose como verificar la imagen
    const inputEtiqueta = document.getElementById("add7").value;
    const largoEtiqueta = inputEtiqueta.trim().length;
    // procesos verificantes
    if (largoNombre >= 50 || largoNombre == 0) {
        alert("Agregue un nombre, de no mas de 50 carácteres");
        return;
    } else if (largoDescripcion >= 500 || largoDescripcion == 0){
        alert("Agregue una descripción, de no mas de 500 caracteres");
        return;
    } else if (largoEtiqueta >= 500 || largoEtiqueta == 0){
        alert("Agregue etiquetas, de no mas de 500 caracteres");
        return;
    } else if (inputCategoria.value == ""){
        alert("Selecione una categoria");
        return;
    } else if (parseInt(inputPrecio) <= 0 || parseInt(inputStock) <=0){
        alert ("Precio y Stock deben ser enteros y positivos");
        return;
    } else {
        let encontrar = listaCategoria.find(elem => elem.nombre == inputCategoria.value);
        nuevoItem = new Producto(inputNombre, inputDescripcion, inputPrecio, encontrar.id, inputStock, pruebaIMG, inputEtiqueta, 9, 0);
        console.log(nuevoItem); //con esto se puede hacer la funcion mandando solamente esta clase
        
        
    }
    agregarProducto();
});

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
      console.log(obj)
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