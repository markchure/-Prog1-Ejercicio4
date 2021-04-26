//Pedir el ingreso de un número n. Mostrar la suma de todos los impares que sean múltiplos de 3 entre 1 y n. Ej. si se ingresa 16, se muestra 27.
var n = parseInt(prompt("Ingrese un número: "));
var suma = 0;

for(var i = 1; i<=n; i++){
  if(i%2!=0 && i%3==0){
    console.log(i + " es impar y múltiplo de 3");
    suma = suma + i;
  }
}

console.log("La suma de los impares múltiplos de 3 es: " + suma);
