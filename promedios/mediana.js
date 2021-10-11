function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return "su promedio es de " + promedioLista;
}

const lista1 = [100, 200, 500, 700, 800, 900, 1800, 400000000];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista1];
  const elemento2 = lista1[mitadLista1 - 1];
  const value = calcularMediaAritmetica([elemento1, elemento2]);
  mediana = value;
} else {
  mediana = lista1[mitadLista1];
}
