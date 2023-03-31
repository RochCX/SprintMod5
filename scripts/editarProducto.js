
// let idProducto = localStorage.getItem('idProducto');
let urlCategoria = "https://slifer.bsite.net/td-categoria"
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

let imgProductoP = document.querySelector('.imgProductoP');
let nomProd = document.getElementById('nomProd');
let descProd = document.getElementById('descProd');
let precProd = document.getElementById('precProd');
let catProd = document.getElementById('catProd');
let stockProd = document.getElementById('stockProd');
let linkProd = document.getElementById('linkProd');
let etiqProd = document.getElementById('etiqProd');



const x = fetch(`https://slifer.bsite.net/td-producto/${id}`,{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    },
});

async function buscaProducto(){
    let respuesta = await x;
    data = await respuesta.json();
    const {nombre, descripcion, precio, idCategoria, stock, link, etiqueta, id} = data[0];
    imgProductoP.src = link;
    nomProd.value = nombre;
    descProd.value = descripcion;
    precProd.value = precio;
    catProd.value = idCategoria;
    stockProd.value = stock;
    linkProd.value = link;
    etiqProd.value = etiqueta;
}

buscaProducto();


btnEditProd = document.querySelector('.btnEditProd');
btnEditProd.addEventListener('click',(e) => {
    e.preventDefault();
    let nomMod = nomProd.value;
    let descMod = descProd.value;
    let precMod = precProd.value;
    let catMod = listaCategoria.find(element => element.nombre == catProd.value)
    let stockMod = stockProd.value;
    let linkMod = linkProd.value;
    let etiqMod = etiqProd.value;

    actualizaInfo(nomMod, descMod, precMod, catMod.id, stockMod, etiqMod, linkMod);
    alert("Cambio satisfactorio!");

    //Recarga la página de productos
    
    setTimeout(function(){
        localStorage.setItem("recarga", 0);
        window.location.href = "./productos.html"; }, 1000);    
        
});

//modificar productos
async function actualizaInfo(nomMod, descMod, precMod, catMod, stockMod, etiqMod, linkMod) {
    const response = await fetch('https://slifer.bsite.net/td-producto', {
        method: 'PUT',   
        mode: 'cors', 
        cache: 'no-cache',
        credencials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            "id": id,
            "nombre": nomMod,
            "precio": precMod,
            "link": linkMod,
            "stock": stockMod,
            "etiqueta": etiqMod,
            "descripcion": descMod,
            "idCategoria": catMod,
            "idSucursal": 9 
        })
    })
    //Recarga la página de productos
    
    setTimeout(function(){
        localStorage.setItem("recarga", 0);
        window.location.href = "./productos.html"; }, 1500); 
}

setTimeout(function actualizarMod(){
    const miObjetoGuardado = localStorage.getItem("modificarEste");
    const miObjeto = JSON.parse(miObjetoGuardado);
    console.log(miObjeto);
    let textoNombre = document.getElementById("nomProd")
    let descProducto = document.getElementById("descProd");
    let precio = document.getElementById("precProd");
    let stock = document.getElementById("stockProd");
    let etiqueta = document.getElementById("etiqProd");
    let link = document.getElementById("linkProd");
    let categoria = document.getElementById("catProd");
    textoNombre.value = miObjeto.nombre;
    descProducto.value = miObjeto.descripcion;
    precio.value = miObjeto.precio;
    stock.value = miObjeto.stock;
    etiqueta.value = miObjeto.etiqueta;
    link.value = miObjeto.link;
    categoria.value = miObjeto.nombre;
    let beb = listaCategoria.find(ele => ele.id === miObjeto.idCategoria);
    console.log(beb)
    categoria.value = beb.nombre
    
},2000)

const catFetch = fetch(urlCategoria, {
    method:"GET",
    headers:{
        "Content-Type": "application/json"
    },
})

let listaCategoria = []


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
        document.getElementById("catProd").appendChild(elemOpcion);
    });

}
prepCategoria();