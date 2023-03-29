let urlAgregar = 'https://slifer.bsite.net/td-producto';
let formAgregar = document.getElementById("formulario");
let nombreProd = document.getElementById("nombre");
let descripcionProd = document.getElementById("descripcion");
let precioProd = document.getElementById("precio");
let categProd = document.getElementById("categoria");
let stockProd = document.getElementById("stock");
let imagenProd = document.getElementById("imagen");
let etiquetaProd = document.getElementById("etiqueta");

let botonAgregar = document.getElementById("guardar");
botonAgregar.addEventListener('click',(e) => {
    e.preventDefault();
    let nomAdd = nombreProd.value;
    let descAdd = descripcionProd.value;
    let precAdd = precioProd.value;
    let catAdd = categProd.value;
    let stockAdd = stockProd.value;
    let linkAdd = imagenProd.value;
    let etiqAdd = etiquetaProd.value;

    agregarProductos(nomAdd, descAdd, precAdd, catAdd, stockAdd, etiqAdd, linkAdd)
});



async function agregarProductos(nomAdd, descAdd, precAdd, catAdd, stockAdd, etiqAdd, linkAdd) {
    const response = await fetch(urlAgregar, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credencials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            "id": 0,
            "nombre": nomAdd,
            "precio": precAdd,
            "link": linkAdd,
            "stock": stockAdd,
            "etiqueta": etiqAdd,
            "descripcion": descAdd,
            "idCategoria": catAdd,
            "idSucursal": 9
        })
    })
}