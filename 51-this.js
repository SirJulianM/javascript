//Este archivo solo se ejecuta en Web, no se ejecuta con node

console.log(this);
console.log(window);
console.log(this === window);

this.nombre = "Contexto global";

function imprimir(){
    console.log(this.nombre);
}

imprimir();

const obj = {
    nombre: 'Objeto contexto',
    imprimir: function(){
        console.log(this.nombre);
    }
}

obj.imprimir();

const obj2 = {
    nombre: 'Objeto contexto 2',
    imprimir
}

obj2.imprimir();

const obj3 = {
    nombre: 'Objeto contexto 3',
    imprimir: () => {
        console.log(this.nombre);
    }
}

obj3.imprimir();

function persona (nombre) {
    this.nombre = nombre;
    return console.log(this.nombre);
}

let julian = new persona("Julián");

//Se recomienda hacer el anterior, no el siguiente

function persona2 (nombre) {
    this.nombre = nombre;
    /*return function(){
        console.log(this.nombre);
    }*/
    return () => console.log(this.nombre);
}

let andres = new persona2("Andrés");
andres();



