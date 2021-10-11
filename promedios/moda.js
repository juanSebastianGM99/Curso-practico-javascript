function moda(lista1) {
  const lista1Count = {};

  lista1.map(function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  });

  const lista1CountArray = Object.entries(lista1Count).sort(function (
    valorAcumulado,
    nuevoValor
  ) {
    return valorAcumulado[1] - nuevoValor[1];
  });

  const moda = lista1CountArray[lista1CountArray.length - 1];
  return "la moda es de " + moda[0];
}
