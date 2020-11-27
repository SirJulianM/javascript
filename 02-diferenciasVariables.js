var hola = "Hola Mundo"
let hello = "Hola Mónik"
console.log(hola)
console.log(hello)

//Ambito de bloque con var

console.log("**********var**********")

var Musica = "Rock"
console.log("Variable Musica antes del bloque", Musica)
{
    var Musica = "Salsa"
    console.log("Variable Musica dentro del bloque", Musica)
}

console.log("Variable Musica después del bloque", Musica)

//Ambito de bloque con let

console.log("**********let**********")

let Musica2 = "Rock"
console.log("Variable Musica antes del bloque", Musica2)
{
    let Musica2 = "Salsa"
    console.log("Variable Musica dentro del bloque", Musica2)
}

console.log("Variable Musica después del bloque", Musica2)

/* 

Javascript hasta antes del 2015 no tenía ambito de bloque
por eso en los códigos más antiguos solo se declaraba con var

*/