// helpers
function esPar(numerito) {
  return numerito % 2 === 0;
}
/* if (numerito % 2 === 0) /* {
      return true;
    } else {
      return false;
    }
  } */

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

//calculadora

function medianaSalariosCol(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitad];
    const personitaMitad2 = lista[mitad - 1];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}

// mediana general
const salariosCol = colombia.map(function (personita) {
  return personita.salario;
});

const salarioOrder = salariosCol.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

const medianaSalarios = medianaSalariosCol(salarioOrder);

// mediana top 10

const spliceStart = (salarioOrder.length * 90) / 100;
console.log(spliceStart);
const spliceCount = salarioOrder.length - spliceStart;
console.log(spliceCount);

const salariosTop10 = salarioOrder.splice(spliceStart, spliceCount);

const medianaSalariosTop10 = medianaSalariosCol(salariosTop10);

console.log({
  medianaSalarios,
  medianaSalariosTop10,
});
