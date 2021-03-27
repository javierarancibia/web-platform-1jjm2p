document
  .getElementById("boton")
  .addEventListener("click", getData, { once: true });

function getData() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;

  let responseName = document.createTextNode(`Tu nombre es ${nombre}`);
  let parrafo = document.getElementById("nombreFinal");
  parrafo.appendChild(responseName);

  let responseLastName = document.createTextNode(`Tu apellido es ${apellido}`);
  let parrafo2 = document.getElementById("apellidoFinal");
  parrafo2.appendChild(responseLastName);
}
