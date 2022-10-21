function limpiar() {
     document.getElementById("miformulario").rest();
}

function Sumar() {
     var x =parseInt(document.getElementById("valor1").value);
     var y =parseInt(document.getElementById("valor2").value);
  document.getElementById("El-resultado").innerHTML = x+y;
}

function Restar() {
     var x =parseInt(document.getElementById("valor1").value);
     var y =parseInt(document.getElementById("valor2").value);
  document.getElementById("El-resultado").innerHTML = x-y;
}

function Multiplicar() {
     var x =parseInt(document.getElementById("valor1").value);
     var y =parseInt(document.getElementById("valor2").value);
  document.getElementById("El-resultado").innerHTML = x*y;
}
function Dividir() {
     var x =parseInt(document.getElementById("valor1").value);
     var y =parseInt(document.getElementById("valor2").value);
  document.getElementById("El-resultado").innerHTML = x/y;
}