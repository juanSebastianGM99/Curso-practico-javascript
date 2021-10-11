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

/* function alturaTriangulo(ladoA, ladoB, base) {
  if (ladoA != ladoB) {
    console.error("Los lados A y B no son iguales");
  } else {
  }
} */

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.groupEnd();

//CODIGO CIRCULO
console.group("Circulos");

function diametroCirculo(radio) {
  return radio * 2;
}

const pi = Math.PI;
console.log("El valor asignado de pi es: " + pi);

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * pi;
}

function areaCirculo(radio) {
  return pi * (radio * radio);
}
console.groupEnd();

// aqui vinculamos con HTML

//cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//circulo
function calcularPerimetroCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}
function calcularAreaCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}

//triangulo
