// codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

//codigo triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.groupEnd();

//codigo circulo
console.group("Circulos");

//Diametro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const pi = Math.PI;
console.log("El valor asignado de pi es: " + pi);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * pi;
}
//Area
function areaCirculo(radio) {
  return pi * (radio * radio);
}
console.groupEnd();
