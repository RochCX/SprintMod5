// const newProd = {
//     "id": 0,
//     "nombre": "TABLETA DIGITALIZADORA WACOM ONE 13 CREATIVE PEN DISPLAY",
//     "precio": 374990,
//     "link": "./img/p01.jpg",
//     "stock":7,
//     "etiqueta": "tableta digital wacom arte tecno escritorio profesional",
//     "descripcion": "una tableta digitalizadora con una pantalla de 13 pulgadas y lápiz digital que permite a los usuarios dibujar y crear arte digital.",
//     "idCategoria": 5,
//     "idSucursal": 9
// };
// fetch("https://slifer.bsite.net/td-producto",{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
        
//     },
//     body: JSON.stringify(newProd)
// })
//     .then(res=>{
//         console.log(res)
//         if(!res.ok){
//             console.log("error");
//             return;
//         }
//         return res.json();
//     })
//     .then(data=>{
//         console.log("exito");

//     })
//     .catch(error =>{
//         console.log(error);
//     });

    /////////////////////

    let urlAgregar = 'https://slifer.bsite.net/td-producto'

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
                "id": 02,
    "nombre": "UNIDAD DE ESTADO SOLIDO WD GREEN 1TB",
    "link": "./img/p12.jpg",
    "precio": 52990,
    "stock":7,
    "etiqueta": "ssd disco solido 1tb wd western digital nvme gen3",
    "descripcion": "Este es un disco duro de estado sólido de alta calidad que ofrece un rendimiento rápido y confiable.",
    "idCategoria": 32,
    "idSucursal": 9
            })
        })
    }

    // agregarProductos();