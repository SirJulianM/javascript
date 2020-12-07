/*
1) Programa una función que cuente el número de caracteres de una cadena de texto.
Ej: Mi función("Hola Mundo") me devolverá el número 10*/

function contarCaracteres(cadena=""){
    if(!cadena){
        console.warn("No ingresaste ninguna cadena");
    } else {
        console.info(`La cadena: ${cadena}, tiene ${cadena.length} caracteres`);
    }
}

contarCaracteres("Hola Mundo");

//Método corto

const contarCaracteres2 = (cadena = '') => 
(!cadena) 
? console.warn("No ingresaste ninguna cadena") 
: console.info(`La cadena: ${cadena}, tiene ${cadena.length} caracteres`)

contarCaracteres2("Hola Mónik: eres la reina verdolaga");

/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados
Ej: Mi función("Hola Mundo", 4) devolverá un Hola*/

const recortarTexto = (cadena = '', longitud = undefined) =>
(!cadena) 
? console.warn('No ingresaste ninguna cadena') 
: console.info(`${cadena.slice(0, longitud)}`)

recortarTexto('Hola mundo', 4);

//Otro método

const recortarTexto2 = (cadena = '', longitud = undefined) =>
(!cadena) 
? console.warn('No ingresaste ninguna cadena') 
: (longitud === 0)
    ? console.warn("No ingresaste la longitud para cortar una carrera de texto")
    : console.info(`${cadena.slice(0, longitud)}`)

recortarTexto2("Hola Mónik: eres la reina verdolaga", 0);
recortarTexto2('Hola Mónik: eres la reina verdolaga', 10);

/*3) Programa una función que dado un string te devuelva un array de textos separados por cierto caracter
Ej: Mi función("Hola que tal,'') devolverá un ['Hola', 'que', 'tal']*/

const cadenaArreglo = (cadena = "", separador = undefined) =>
(!cadena)
? console.warm("No ingresaste ninguna cadena")
: (separador === undefined)
    ? console.warn("No ingresaste el caracter separador")
    : console.info(cadena.split(separador));

cadenaArreglo('Lorem ipsum', ' ');
cadenaArreglo('Hola que tal', ' ');
cadenaArreglo('Hola que tal');

/*4) Programa una función que repita un texto X veces
Ej: mi función("Hola Mundo", 3) devolverá Hola Mundo, Hola Mundo, Hola Mundo*/

const repetirTexto = (texto ="", veces = undefined) =>{
    if(!texto) return console.warn('No has ingresado un texto');
    if(veces === undefined) return console.warn("No ingresaste el número de veces a repetir el texto");
    if(veces === 0) return console.error("El número de veces no puede ser cero");
    if(Math.sign(veces)===-1) return console.error('El número de veces no puede ser negativo')
    for(i=1; i<=veces; i++){
        //console.log(texto)
        console.log(`${i}) ${texto}`);
    }
}

repetirTexto('Hola Mónica, que bella estás', 5);
repetirTexto('Hola Mónica, que bella estás');
repetirTexto('Hola Mónica, que bella estás', -5);
repetirTexto('Hola Mónica, que bella estás', 0);

/*5) Programa una función que invierta las palabras de una cadena de texto
Ej: miFuncion(HolaMundo) devolverá odnuMaloH */

const invertirCadena = (cadena = "") => 
(!cadena)
? console.warn("No ingresaste ninguna cadena")
: console.info(cadena.split("").reverse().join(""))

invertirCadena("Hola mundo");
invertirCadena("Señorita Mónica, usted se ve mejor que una de 20");
invertirCadena("Javascript es un gran lenguaje de programación. Espero aprender Java y Python");

/*6) Programa una función para contar el número de veces que se repite una palabra en un texto
Ej: miFuncion("Hola mundo, adios mundo", "mundo") devolverá 2 */

const contarPalabras = (cadena = "", texto = "") => {
    if (!cadena)
        return console.warn ("No ingresaste ninguna cadena");
    if (!texto)
        return console.warn ("No ingresaste ninguna palabra a buscar");
        let i = 0, cont = 0;
        while(i !== -1){
            i = cadena.indexOf(texto, i);
            if (i!==-1){
                i++;
                cont++;
            }
        }
        return console.info(`La palabra ${texto} se repite ${cont} veces`);
}

contarPalabras("Hola mundo, adios mundo", "mundo");

/*7) Programa una función que valide si un texto es palíndromo (que se lee igual al derecho que al revés) 
Ej: miFuncion("Ana") devolverá true*/

const palindromo = (cadena = "") =>{
    if(!cadena)
    return console.warm("No ingresaste una palabra o frase");
    cadena = cadena.toLowerCase();
    let alReves = cadena.split("").reverse().join("");
    return(cadena === alReves)
    ? console.info(`Si es palindromo ${cadena}, palabra al reves ${alReves}`)
    : console.info(`La palabra no es palindromo`)
}

palindromo("Mónica");
palindromo("Salas")

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado 
Ej: xyz1 xyz2 xyz3 xyz4 xyz5 devuelve 1, 2, 3, 4, 5 */

const eliminarCaracteres = (texto = "", caracteres="") => 
(!texto)
? console.warn("No ingresaste ningún texto")
:(!caracteres)
    ? console.warn("No ingresaste un patrón de caracteres")
    : console.info(texto.replace(new RegExp(caracteres, "ig"), ""));

eliminarCaracteres();
eliminarCaracteres("xyz1 xyz2 xyz3 xyz4 xyz5");
eliminarCaracteres("xyz1 xyz2 xyz3 xyz4 xyz5", "xy");

