// Validación de Formulario de calzado, chaquetas, tops, pantalones
// let buttonPay=document.getElementById("pay");

// buttonPay.onclick = function(){
function validarForm() {
    var verifica=true;
    
    var nombre=document.getElementById("nombre");
    var descripcion=document.getElementById("descripcion");
    var precio=document.getElementById("precio");
    var categoria=document.getElementById ("selectCat");
    var stock=document.getElementById ("stock");
    var imagen=document.getElementById ("imagen");
    var etiqueta=document.getElementById("etiqueta");

    if (!nombre.value){
        alert("El campo nombre es requerido");
        nombre.focus();
        verifica=false;
    }else if (!descripcion.value){
        alert("El campo descripción es requerido");
        descripcion.focus();
        verifica=false;
    }else if (!imagen.value){
        alert("El campo imagen es requerido");
        imagen.focus();
        verifica=false;
    }else if (!etiqueta.value){
        alert("El campo etiqueta es requerido");
        etiqueta.focus();
        verifica=false;
    }
    if(verifica){
        alert("Guardado exitosamente");
}
}