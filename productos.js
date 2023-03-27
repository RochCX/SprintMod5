let data;
let arreglo = [];
const x = fetch("https://slifer.bsite.net/td-producto",{
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

async function fetchMethod(){
    let respuesta = await x;
    data = await respuesta.json();
    const items = data.map(prod => new Producto(prod.nombre, prod.descripcion, prod.precio, prod.categoria, prod.stock, prod.imagen, prod.etiqueta));
    console.log(items);
//     class Producto {
//         constructor(nombre, descripcion, precio, categoria, stock, imagen, etiqueta){
//             this.nombre = nombre;
//             this.descripcion = descripcion;
//             this.precio = precio;
//             this.categoria = categoria;
//             this.stock = stock;
//             this.imagen = imagen;
//             this.etiqueta = etiqueta;
    
//     }
// }
}
fetchMethod();


class Producto {
    constructor(nombre, descripcion, precio, categoria, stock, imagen, etiqueta){
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.precio = precio;
            this.categoria = categoria;
            this.stock = stock;            
            this.etiqueta = etiqueta;
            this.imagen = imagen;
            }}


    