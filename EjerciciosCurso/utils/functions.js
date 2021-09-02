function sumaNumeros(num1, num2){
  return num1+num2;
}

function restaNumeros(num1,num2){
  return num1-num2;
}

function buscaCaracter(cadena,caracter){
  for(const char of cadena){
      if(char == caracter){
          return char;
      }
      continue;
  }
}