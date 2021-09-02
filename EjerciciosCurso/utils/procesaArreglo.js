// usando forEach del arreglo y una funcion arrow, procesar el arreglo, si el numero es non restarle 5 e imprimierlo, si el numero es par sumarle 5 e imprimierlo.

const procesaArreglo = (arreglo) => {
  arreglo.forEach((element) => {
    let esPar = element % 2;
    if (esPar == 0) {
      element = element + 5;
      console.log(element);
    } else {
      element = element - 5;
      console.log(element);
    }
  });
};
