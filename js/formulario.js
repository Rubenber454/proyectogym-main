document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var formMessage = document.getElementById('formMessage');
    
    if (name && email && telefono) {
        formMessage.innerText = "Formulario enviado con éxito.";
        formMessage.style.color = "green";
    } else {
        formMessage.innerText = "Por favor, completa todos los campos.";
        formMessage.style.color = "red";
    }
});