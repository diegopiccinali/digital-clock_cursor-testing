function sumarNumeros() {
  var num1 = document.getElementById("numero1").value;
  var num2 = document.getElementById("numero2").value;
  var suma = parseInt(num1) + parseInt(num2);
  document.getElementById("resultado").innerText = suma;
}

function restarNumeros() {
  var num1 = document.getElementById("numero1").value;
  var num2 = document.getElementById("numero2").value;
  var resta = parseInt(num1) - parseInt(num2);
  document.getElementById("resultado").innerText = resta;
}

function multiplicarNumeros() {
  var num1 = document.getElementById("numero1").value;
  var num2 = document.getElementById("numero2").value;
  var multiplicacion = parseInt(num1) * parseInt(num2);
  document.getElementById("resultado").innerText = multiplicacion;
}

function dividirNumeros() {
  var num1 = document.getElementById("numero1").value;
  var num2 = document.getElementById("numero2").value;
  var division =
    num2 != 0 ? parseInt(num1) / parseInt(num2) : "Error: División por cero";
  document.getElementById("resultado").innerText = division;
}
document.addEventListener("DOMContentLoaded", () => {
  let reloj = document.getElementById("reloj");
  setInterval(() => {
    let date = new Date();
    let milisegundos = date.getTime();
    let horaFormato = convertirAMiFormatoDeHora(milisegundos);
    reloj.innerHTML = `<h3>${horaFormato}</h3>`;
  }, 1000);
});

function convertirAMiFormatoDeHora(milisegundos) {
  let totalSegundos = Math.floor(milisegundos / 1000);
  let horas = Math.floor(totalSegundos / 3600) % 24; // Ajuste para horas (formato 24h)
  let minutos = Math.floor((totalSegundos / 60) % 60);
  let segundos = totalSegundos % 60;

  // Ajusta el formato para mostrar dos dígitos
  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;

  return horas + ":" + minutos + ":" + segundos;
}
