let urlAgregar = 'https://slifer.bsite.net/td-producto';
let formAgregar = document.getElementById("formulario");
let botonAgregar = document.getElementById("guardar");






async function agregarProductos() {
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
            "nombre": "p5",
            "precio": 330,
            "link": "/img/i",
            "stock": 100,
            "etiqueta": "p5",
            "descripcion": "p5",
            "idCategoria": 26,
            "idSucursal": 9        

        })
    })
}