function enviar(){
    let name = document.getElementById("nombre");
    let phone = document.getElementById("telefono");
    let email = document.getElementById("correo");
    let text = document.getElementById("mensaje");

    alert("Informacion Ingresada:\n  Nombre: "+name.value+" Telefono: "+phone.value+" Correo: "+email.value+" Mensaje: "+text.value);
}