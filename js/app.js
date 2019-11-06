// Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

// EventListeners

EventListeners();


function EventListeners(){
    document.addEventListener('DOMContentLoaded', inicioApp);

    // Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // Boton enviar en el submit
    btnEnviar.addEventListener('click', enviaremail);

    // Boton de reset
    resetBtn.addEventListener('click', resetForm);

}



// Funciones
function inicioApp() {
    // Deshabilitar el botón de envío
    // Todo lo que quiere que se ejecute cuando cargue la página lo coloco aqui
    btnEnviar.disabled = true;
}

// valida que el campo tenga algo escrito

function validarCampo() { 
    // Verifica si hay algo escrito

    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);

    // validar unicamente el email
    if(this.type === 'email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    if(email.value !== '' && asunto.value !== '' && mensaje.value !==''){
        if(errores.length === 0){ // si la cantidad de errores es igual a 0
            btnEnviar.disabled = false; // Habilítame el boton para enviar
        }
        
    }


}
// Reset al formulario

function resetForm(e) {
    e.preventDefault();
    formularioEnviar.reset();

}

// Funcion cuando se envia el correo
function enviaremail(e) {

    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block'; // Lo mostramos ya que estaba oculto ocn css


    // Gif que envia email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block'; // creamos el elemento imagen del sobre

    // Ocultamos spinner despues de 3 segundos y mostramos Envelop
    // para dar efecto de enviado

    setTimeout(function() {
        spinnerGif.style.display = 'none'; // ocultamos spinner
        document.querySelector('#loaders').appendChild(enviado); // mostramos envelope

        setTimeout(function() {
            enviado.remove();
            formularioEnviar.reset();
            console.log(formularioEnviar);

        }, 5000);
    }, 3000);


    e.preventDefault();

}

// Validamos longitud de lo que escribimos en los inputs
function validarLongitud(campo) {
    console.log(campo.value.length);

// si en el email hay mayor que 0 de longitud
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red'; // pinta rojo
        campo.classList.add('error'); // aparece el error
    }

}

function validarEmail(campo) {
    // Para buscar el contenido de un string
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1 ){ // sino es igual a ´1 es que si la encontro
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red'; // pinta rojo
        campo.classList.add('error');
    }

}
