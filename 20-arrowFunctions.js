/*
Las Arrow Functions es una nueva manera de definir funciones anónimas y expresarlas
*/

//Ejemplo de función anónima

const saludo = function(){
    console.log('Hola Stefan Andrés');
}

saludo();

//Ejemplo de función flecha

const saludo1 = () => console.log('Hola Ana Sofía');

saludo1();

//Otra manera

const saludo2 = (nombre) => console.log(`Hola ${nombre}`);

saludo2('Monica Cecilia');

const suma = (a,b) => console.log(`La suma de los numeros es ${a+b}`);

suma(32, 37);

const funciondevariaslineas = () => {
    console.log('Uno');
    console.log('Dos');
    console.log('Tres');
    console.log('Catorce');
}

funciondevariaslineas();

listaNumeros = [1,2,3,4,5];

listaNumeros.forEach((el, index) => {
    console.log(`El numero ${el} está en la posición ${index}`);
});

const cerdo = {
    nombre: 'Chepe',
    gruñe: () => console.log(`Chepe gruñe`)
}

cerdo.gruñe();