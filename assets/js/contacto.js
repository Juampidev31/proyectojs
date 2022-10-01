//Envio Formulario Contacto
emailjs.init('boCqIYxiGFLv3vuW1')
const btn = document.getElementById('button-contacto');

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();



const serviceID = 'default_service';
const templateID = 'template_c1vzpqg';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {

        Swal.fire({
            icon: 'success',
            title: 'Se envió el mensaje',
            timer: 2500,
            showConfirmButton: false
          })

    window.location = "contacto.html";

    }, (err) => {
    btn.value = 'Send Email';
    alert(JSON.stringify(err));
    });
});