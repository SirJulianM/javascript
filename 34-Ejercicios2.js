/*1) Programa una función que obtenga un número aleatorio entre 501 y 600*/

const aleatorio = () => console.info(Math.round(Math.random()*100)+500)

aleatorio();
/*2) Programa una función que reciba un número y evalue si es capicúa o no 
(Es un número que se lea igual al derecho o al revés)
Ej: miFuncion(2002) deberá devolver true*/

const capicua = (numero = 0) => {
    if(!numero) return console.warn("No ingresaste un número");
    if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado NO es un número`);
    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");
    return(numero === alReves)
    ? console.info(`El número ${numero} si es capicúa, número al revés ${alReves}`)
    : console.info(`El número no es capicúa`)
}

capicua(191);
capicua(199);
capicua();
capicua("2000");


/*3) Programa una función que calcule el factorial de un número 
(El factorial de un número entero positivo n, se define como el producto de todos los números enteros
positivos de 1 a n)
Ej: miFuncion(5) devolverá 120*/

const factorial = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número");
    if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado NO es un número`);
    if(numero === 0) return console.error('El número no puede ser cero');
    if(Math.sign(numero)===-1) return console.error('El número no puede ser negativo');
    let factorial = 1;
    for(let i=numero; i>=1; i--){
        factorial = factorial *i;
    }
    console.log(`El factorial de ${numero} es ${factorial}`);
}

factorial(5);
factorial("4");
factorial();
factorial(-3);
factorial(0)
factorial(8);

/*4) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no. 
Ej: miFuncion(7) devolverá true. */

const primo = (numero = undefined) =>{
    if(numero === undefined) return console.warn(`No ingresaste un número`);
    if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado NO es un número`);
    if(numero === 0) return console.error('El número no puede ser cero');
    if(numero === 1) return console.error('El número no puede ser uno');
    if(Math.sign(numero)===-1) return console.error('El número no puede ser negativo');
    let divisible = false;
    for(let i=2; i<numero; i++){
        if(numero%i===0){
            divisible = true;
        }
        break;
    }
    return (divisible) 
    ? console.log(`El número ${numero} no es primo`)
    : console.log(`El número ${numero} es primo`)
}

primo();
primo(-4);
primo("50");
primo(19);
primo(10);
primo(0);
primo(1);

/*5) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

const numeroImparPar = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número");
    if(typeof(numero)!=="number") return console.error(`El valor ${numero} ingresado, NO es un número`);

    return(numero %2 ==0)
    ? console.info(`El número ${numero} es par`)
    : console.info(`El número ${numero} es impar`)
}

numeroImparPar();
numeroImparPar("50");
numeroImparPar(77);
numeroImparPar(24);

/*6) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
Ej: miFuncion(0,"C") devolverá 32°F. */

const convertirGrados = (grados=undefined, unidad=undefined) =>{
    if(grados === undefined) return console.warn("No ingresaste grados a convertir");
    if(typeof(grados) !== "number") return console.error(`El valor ${grados} ingresado, NO es un número`);
    if(unidad === undefined) return console.warn("No ingresaste el grado a convertir");
    if(typeof(unidad) !== "string") return console.error(`El valor ${grados} ingresado, NO es una cadena de texto`);
    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido");
    if(unidad === "C") return console.info(`${grados}°C = ${Math.round(grados*(9/5)+32)}°F`);
    if(unidad === "F") return console.info(`${grados}°F = ${Math.round((grados-32)*(5/9))}°C`);
}

convertirGrados();
convertirGrados("2");
convertirGrados(2);
convertirGrados(2, true);
convertirGrados(2, "Hola");
convertirGrados(10, "C");
convertirGrados(50, "F");