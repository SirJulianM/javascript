//Novedades de Javascript 2015

Symbol(); //Se usa para objetos privados cuyo objetivos es crear una referencia única

let id = Symbol();
let id2 = Symbol();
let monik = "Hola";
let monik2 = "Hola";
let andres = Symbol("id");
let andres2 = Symbol("id2");
console.log(id === id2);
console.log(monik === monik2);
console.log(andres, andres2)
console.log(typeof andres, typeof andres2);

const nombre = Symbol("nombre");
const saludar = Symbol("saludar");

const persona = {
    [nombre]: 'Julián',
}

console.info(persona);

persona.nombre = "Julián Madrid";
console.info(persona);
console.log(persona.nombre);
console.log(persona[nombre]);

persona[saludar] = function(){
    console.log("Hola");
}

console.log(persona);
persona[saludar]();

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

console.log(Object.getOwnPropertySymbols(persona));
