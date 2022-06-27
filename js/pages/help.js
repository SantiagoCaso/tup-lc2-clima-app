const mailInvalido = document.getElementById("none-valid");
let inputEmail = document.getElementById("email");
const formulario = document.getElementById("formulario");
const btnLimpiar = document.getElementById("clear");
let inputName = document.getElementById("name");
let inputMessage = document.getElementById("mesage")


function validMail(correo){
    // expreción regular para la validación del Email
    var regExprecion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var expValido = regExprecion.test(correo);
    console.log(expValido);
    if (expValido == false) {
        mailInvalido.removeAttribute("style");
        mailInvalido.setAttribute("style", "display: block");
    } else if (expValido == true){
        mailInvalido.removeAttribute("style");
        mailInvalido.setAttribute("style", "display: none");
    }

}

function limpiarForm(){
    formulario.reset(); 
}



