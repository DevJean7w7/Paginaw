document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtén el token de reCAPTCHA
  const recaptchaToken = grecaptcha.getResponse();

  if (!recaptchaToken) {
    alert("Por favor, completa el reCAPTCHA.");
    return;
  }

  // Asigna el token de reCAPTCHA al campo oculto
  document.getElementById('g-recaptcha-response').value = recaptchaToken;

  btn.value = 'Enviando..';

  const serviceID = 'default_service';
  const templateID = 'template_h5b6tm6';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      Swal.fire({
        icon: 'success',
        title: 'Email enviado!',
        text: 'Su correo electrónico se ha enviado correctamente.',
      });
    })
    .catch(err => {
      btn.value = 'Enviar';
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: JSON.stringify(err),
      });
    });
});



