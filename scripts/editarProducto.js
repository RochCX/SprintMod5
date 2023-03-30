
// let idProducto = localStorage.getItem('idProducto');

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
    let catMod = catProd.value;
    let stockMod = stockProd.value;
    let linkMod = linkProd.value;
    let etiqMod = etiqProd.value;

    actualizaInfo(nomMod, descMod, precMod, catMod, stockMod, etiqMod, linkMod)
   
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
}

function actualizarMod(){
    const miObjetoGuardado = localStorage.getItem("modificarEste")
    const miObjeto = JSON.parse(miObjetoGuardado);
    console.log(miObjeto);
    let textoNombre = document.getElementById("esto1")
    let textoProducto = document.getElementById("esto2");
    textoNombre.value = miObjeto.nombre;
    textoProducto.value = miObjeto.descripcion;
}