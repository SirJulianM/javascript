const iterable2 = [1,2,3,4,5];
const iterable = 'Hola mundo'
const iterable3 = new Map([['nombre', 'Julián'],['apellidos', 'Madrid']])

//Accedemos al iteador del iterable

const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);
console.log(iterador.next());

let next = iterador.next();

while(!next.done){
    console.log(next.value);
    next = iterador.next();
}

console.log(iterable3);