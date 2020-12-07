/*1) Programa una función para convertir números de base binaria a decimal y viceversa  
Ej: miFuncion(100,2) devolverá 4 base 10. */

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un número a convertir");
    if (typeof(numero) !== "number") return console.error(`El valor ${numero} ingresado, NO es un número`);
    if (base === undefined) return console.warn("No ingresaste la base a convertir");
    if (typeof(base) !== "number") return console.error(`El valor ${base} ingresado, NO es un número`);
    if(base===2){
        return console.info(`${numero} base ${base} = ${(parseInt(numero, base))} base 10`)
    } else if (base === 10){
        return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`)
    } else{
        console.log("El tipo de base a convertir no es válida")
    }
}

convertirBinarioDecimal();
convertirBinarioDecimal(100);
convertirBinarioDecimal("100");
convertirBinarioDecimal(100,"2");
convertirBinarioDecimal(100,2);
convertirBinarioDecimal(101,2);
convertirBinarioDecimal(4,10);
convertirBinarioDecimal(14,10);
convertirBinarioDecimal(104,8);


/*2) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada. 
Ej: miFuncion(1000, 20) devolverá 800.*/

const asignarDescuento = (valor = undefined, descuento = 0) =>{
    if(valor === undefined) return console.warn("No ingresaste el monto");
    if(typeof(valor) !== "number") return console.error(`El monto ${valor} ingresado, no es un número`);
    if(valor === 0) return console.error("El monto no puede ser cero");
    if(Math.sign(valor) === -1) return console.error("El monto no puede ser negativo");
    if(typeof(descuento) !== "number") return console.error(`El valor ${descuento} ingresado, no es un número`);
    if(Math.sign(descuento) === -1) return console.error("El descuento no puede ser negativo");
    return console.info(`$${valor} - ${descuento}% = $${valor-(valor*descuento)/100}`);
}

asignarDescuento();
asignarDescuento("50");
asignarDescuento(0);
asignarDescuento(-1000);
asignarDescuento(1000, "20");
asignarDescuento(1000, -20);
asignarDescuento(1000, 20);


/* 3) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy./ 
Ej: miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

const calcularAnios = (fecha = undefined) => {
    if(fecha === undefined) return console.warn("No enviaste una fecha");
    if(!(fecha instanceof Date)) return console.error(`El valor ingresado, no es una fecha válida`);
    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    let aniosMilisegundos = 1000*60*60*24*365;
    let aniosHumanos = Math.floor(hoyMenosFecha/aniosMilisegundos);

    return(Math.sign(aniosHumanos)===-1)
    ? console.info(`Faltan ${Math.abs(aniosHumanos)} para el ${fecha.getFullYear()}`)
    :(Math.sign(aniosHumanos)===1)
        ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
        : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
}

calcularAnios();
calcularAnios({});
calcularAnios(new Date());
calcularAnios(new Date(1987,3,30));
calcularAnios(new Date(2087,3,30));

/* 4) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
Ej: miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

const contarLetras = (cadena="") => {
    if(!cadena) return console.warn("No ingresaste una cadena de texto");
    if(typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado, NO es una cadena de texto`);
    let vocales = 0; 
    let consonantes = 0;

    for(let letra of cadena){
        if(/[AEIOUÁÉÍÓÚÜaeiouáéíóúü]/.test(letra)){
            vocales++;
        }
        if(/[BCDFGHJKLMNÑPQRSTVWXYZbcdfghjklmnñpqrstvwxyz]/.test(letra)){
            consonantes++;
        }
    }

    return console.info({
        cadena,
        vocales,
        consonantes
    });
}

contarLetras();
contarLetras(3);
contarLetras('Hola Mundo');
contarLetras("Que bombón es Mónik");

/* 5) Programa una función que valide que un texto sea un nombre válido.
Ej. miFuncion("Jonathan MirCha") devolverá verdadero. */

const validarNombre = (nombre = "") =>{
    if(!nombre) return console.warn("No ingresaste un nombre");
    if(typeof nombre !== "string") return console.error("No ingresaste un nombre");
    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúü\s]+$/g.test(nombre);
    return (expReg)
    ? console.info(`${nombre}, es un nombre válido`)
    : console.info(`${nombre}, NO es un nombre válido`);
}

validarNombre();
validarNombre("3");
validarNombre("Mónik");
validarNombre("Mónik Hincapié");

/* 6) Programa una función que valide que un texto sea un email válido. 
Ej: miFuncion("jonmircha@gmail.com") devolverá verdadero. */

const validarEmail = (email = "") => {
    if(!email) return console.warn("No ingresaste un email");
    if(typeof email !== "string") return console.error(`El valor ${email} ingresado, no es un correo electrónico`);
    let expReg = /[A-Z0-9]+(\.[..a-z0-9]+)*@[A-Z0-9]+(\.[..a-z0-9]+)*(\.[a-z{2,15}]+)$/i.test(email);
    return (expReg)
    ? console.info(`${email}, es un email válido`)
    : console.info(`${email}, NO es un email válido`);
}

validarEmail();
validarEmail(3);
validarEmail("julianmadrid@youlauss.com");
validarEmail("monikhin@gmail.com");

//Otra manera

const validarPatron = (cadena = "", patron = undefined) => {
    if(!cadena) return console.warn("No ingresaste una cadena de texto a evaluar");
    if(typeof cadena !== "string") return console.error(`El valor ${cadena} ingresada, no es una cadena de texto`);
    if(patron === undefined) return console.warn("No ingresaste un patrón a evaluar");
    if(!(patron instanceof RegExp)) return console.error(`El valor ${patron} ingresado, no es un patrón valido`);
    let expReg = patron.test(cadena);
    return (expReg)
    ? console.info(`${cadena}, cumple con el patrón ingresado`)
    : console.info(`${cadena}, NO cumple con el patrón ingresado`);
}

validarPatron();
validarPatron("Julián Madrid");
validarPatron("Julián Madrid", /^[A-Za-zÑñÁáÉéÍíÓóÚúü\s]+$/g);
validarPatron("Andrés Madrid 19", /^[A-Za-zÑñÁáÉéÍíÓóÚúü\s]+$/g);
validarPatron("julianmadrid@youlauss", /[A-Z0-9]+(\.[..a-z0-9]+)*@[A-Z0-9]+(\.[..a-z0-9]+)*(\.[a-z{2,15}]+)$/i);
validarPatron("monikhin@gmail.com", /[A-Z0-9]+(\.[..a-z0-9]+)*@[A-Z0-9]+(\.[..a-z0-9]+)*(\.[a-z{2,15}]+)$/i);