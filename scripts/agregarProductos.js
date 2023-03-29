let urlProducto = "https://slifer.bsite.net/td-producto"
let urlCategoria = "https://slifer.bsite.net/td-categoria"

// const prodFetch = fetch("https://slifer.bsite.net/td-producto",{
//     method:"GET",
//     headers:{
//         "Content-Type":"application/json"
//     },
// })

const formularioAgregar = document.getElementById("formAdd");

formularioAgregar.addEventListener("submit", (event) =>{
    // anteponer un validador
    event.preventDefault();
    const inputNombre = document.getElementById("add1").value;
    const largoNombre = inputNombre.trim().length;
    const inputDescripcion = document.getElementById("add2").value;
    const largoDescripcion = inputDescripcion.trim().length;
    const inputPrecio = document.getElementById("add3").value;
    const inputCategoria = document.getElementById("add4").value;
    const inputStock = document.getElementById("add5").value;
    const inputImagen = document.getElementById("add6");
    const inputEtiqueta = document.getElementById("add7").value;
    const largoEtiqueta = inputEtiqueta.trim().length;
    // procesos verificantes
    if (largoNombre >= 50){
        alert("El nombre del producto no puede tener mas de 50 caracteres");
        return;
    } else if (largoDescripcion >= 500){
        alert("La descripcion del producto no puede tener mas de 500 caracteres");
        return;
    } else if (largoEtiqueta >= 500){
        alert("Las etiquetas del producto no puede tener mas de 500 caracteres");
        return;
    }
    else if (parseInt(inputPrecio) <= 0 || parseInt(inputStock) <=0){
        alert ("Precio y Stock deben ser enteros y positivos");
        return
    } else if (!inputImagen || !inputImagen.files || inputImagen.files[0]){
        alert("Debes selecionar una imagen");
        return;
    }
    formularioAgregar.submit();
});