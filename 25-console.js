/* 

Console 

El objeto console sirve para imprimir información dentro de los navegadores. 
A continuación algunos ejemplos

*/

console.log('Este es un mensaje de prueba');
//console.log(console);
console.error('Esto es un error');
console.warn('Esto es un aviso');
console.info('Esto es un mensaje informativo');

let nombre = 'Julián',
apellido = 'Madrid',
edad = 33

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(`Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad}`);
/*console.log(window); //No funcionan con Node.js
console.log(document);
console.dir(window);
console.dir(document);*/
console.clear();

console.group("Cursos de Software Evolution en YouTube");
console.log('HTML');
console.log('CSS');
console.log('Javascript');
console.log('Vue.js');
console.log('Node.js');
console.log('Bootstrap');
console.groupEnd();

console.table(Object.entries(console).sort());

const numeros = [1,2,4,8,5,6,7]

console.table(numeros)
console.table(numeros.sort());

/* Nota: Si usted va a concatenar arreglos en una tabla, no se puede hacer, se debe hacer por separados */

const vocales = ['a','e','i','o','u'];
const consonantes = ['b','c','d','f']

console.table(vocales, consonantes) //Solo imprime las vocales en un navegador, en Node imprime una cosa rara

/* Nota: Console.table puede imprimir objetos */

const Perro = {
    nombre: 'Bonny',
    raza: 'Boxer',
    color: 'Café'
}

console.table(Perro);

/* console.time("Cuanto tiempo tarda mi código");
const arreglo= Array(100);

for(let i=0; i<=arreglo.length; i++){
    arreglo[i] = i;
}

console.timeEnd("Cuanto tiempo tarda mi código"); */

for(let i=1; i<=10; i++){
    console.count("codigo for: ");
    console.log(i);
}

let x=5,
y = 2,
pruebaXY = "Se espera que X siempre sea menor que Y";

console.assert( x<y, {x, y, pruebaXY});