let divs = document.getElementsByClassName("midiv");

divs[0].addEventListener("click", function () {
  alert("Hola! Soy el div");
});

let boton = divs[0].querySelector("button");

boton.addEventListener("click", function (event) {
  alert("Hola!");
  event.stopPropagation();
});
