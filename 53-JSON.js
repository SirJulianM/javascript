const json = {
    cadena: "Julián",
    numero: 33,
    booleano: true,
    arreglo: ["tocar el piano", "leer", "nadar"],
    objeto: {
        twitter: "@SirJulianM",
        email: "ing_julianmadrid@hotmail.com"
    },
    nulo: null
}

console.log(json);
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse(true));
console.log(JSON.parse("19"));
//console.log(JSON.parse("Hola Mundo"));
console.log(JSON.parse("null"));


console.log(JSON.stringify({}));
console.log(JSON.stringify([1,2,3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));

console.log(JSON.parse('{"cadena": "Julián", "numero": 33, "booleano": true, "arreglo": ["tocar el piano", "leer", "nadar"], "objeto": {"twitter": "@SirJulianM", "email": "ing_julianmadrid@hotmail.com"}, "nulo": null}'));

//Nota: No cambiar la línea 28, de lo contrario te saldrán errores de lo lindo