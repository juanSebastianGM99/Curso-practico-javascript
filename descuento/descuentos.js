/* const precioOriginal = 100;
const descuento = 15; */

function calcularPrecioConDescuento(precio, descuento) {
  const porDescuento = 100 - descuento;
  const precioConDescuento = (precio * porDescuento) / 100;
  return precioConDescuento;
}

function clickDescount() {
  const inputPrice = document.getElementById("valuePrice");
  const valuePrice = inputPrice.value;
  const inputCupon = document.getElementById("valueCupon");
  const valueCupon = inputCupon.value;
  let descount;
  const cupones = ["modelo1", "modelo2", "modelo3"];

  switch (valueCupon) {
    case cupones[0]:
      descount = 20;
      break;
    case cupones[1]:
      descount = 25;
      break;
    case cupones[2]:
      descount = 50;
      break;
  }

  const precioConDescuento = calcularPrecioConDescuento(valuePrice, descount);
  const precioFinal = document.getElementById("price");
  precioFinal.innerText =
    "El articulo con descuento del " +
    descount +
    "% " +
    "tiene un costo de " +
    "$" +
    precioConDescuento +
    " Dolares";
}
