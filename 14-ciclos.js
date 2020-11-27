// While o mientras

console.log('Ciclo While')
let contador = 0

while(contador<10){
    console.log(contador);
    contador++;
}

// Do While o hacer mientras

console.log('Ciclo Do While')

do{
    console.log(contador);
    contador++;
}while (contador<10) 

//Ciclo For

console.log('Ciclo for')

for(let i = 90; i<=100; i++){
    console.log(i);
}

//Ciclo ForEach

console.log('Ciclo foreach')

let numeros = [10,20,30,40,50,60,70,80,90];

for(let j=0; j<=numeros.length; j++){
    console.log(numeros[j]);
}

const usuario ={
    nombre: 'Stefan Andrés',
    apellidos: 'Madrid Hincapié',
    edad: 7
}

//For in

console.log('Ciclo For In');

for(const propiedad in usuario){
    console.log(`key: ${propiedad}, value: ${usuario[propiedad]}`)
}

//For of

console.log('Ciclo For of')

for(const elemento of numeros){
    console.log(elemento)
}

let saludo = "Hola Mónik"
for(caracter of saludo){
    console.log(caracter);
}

/* La diferencia entre For in y For of es que for in es para objetos primitivos de Javascrip, 
mientras que for of es para arreglos y cadena de texto */