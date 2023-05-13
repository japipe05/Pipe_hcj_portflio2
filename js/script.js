var texto = document.getElementById('texto-movil');
var palabras = ['Hola', 'este', 'es', 'un', 'ejemplo'];
var palabraActual = 0;
var letraActual = 0;

setInterval(function() {
  if (letraActual <= palabras[palabraActual].length) {
    texto.innerHTML = palabras[palabraActual].substr(0, letraActual);
    letraActual++;
  } else {
    letraActual = 0;
    palabraActual++;
    if (palabraActual >= palabras.length) {
      palabraActual = 0;
    }
  }
}, 500); // cada 500ms muestra una nueva palabra
