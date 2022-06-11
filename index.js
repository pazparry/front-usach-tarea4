// Mostrar en consola los números del 1 al 100 de 1 en 1.
let funcion = numero => {
    if (numero === 101) {
        return;
    }
    console.log(numero);
    return funcion(numero + 1);
};
console.log(funcion(1)) 


// Mostrar en consola los números del 1000 al 500 de 2 en 2.
let funcion2 = numero => {
    if (numero === 498) {
        return;
    }
    console.log(numero);
    return funcion2(numero - 2);
};
console.log(funcion2(1000)) 

/* Obtener el promedio de notas de un alumno considerando que
la suma de notas debe ser el retorno de una función y el promedio
el retorno de otra función. Las notas son: 6,8,9,2,5,10. */
const array = [6, 8, 9, 2, 5, 10];
let suma = 0;

for (let i = 0; i < array.length; i++) {
    suma += array[i];
}
console.log(suma);
promedio = (suma / array.length);
console.log(promedio);