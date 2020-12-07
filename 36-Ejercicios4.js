/*1) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado.
Ej: mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

const devolverCuadrados = (arreglo = undefined) => {
    if(arreglo===undefined) return console.warn("No ingresaste un arreglo de números");
    if(!(arreglo instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arreglo.length === 0) return console.error("El arreglo está vacío");
    for(let num of arreglo){
        if(typeof num !== "number"){
            return console.error(`El valor ${num} ingresado, no es un número`);
        }
    }
    const newArreglo = arreglo.map(el => el*el);
    return console.info(`Arreglo original: ${arreglo}, elevado al cuadrado = ${newArreglo}`)
}

devolverCuadrados();
devolverCuadrados("Hola");
devolverCuadrados([]);
devolverCuadrados([1,"2",5]);
devolverCuadrados([1,4,5,{}]);
devolverCuadrados([1,4,5]);

/*2) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array. 
Ej: miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/

const arregloMinMax = (arreglo = undefined) => {
    if(arreglo===undefined) return console.warn("No ingresaste un arreglo de números");
    if(!(arreglo instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arreglo.length === 0) return console.error("El arreglo está vacío");
    for(let num of arreglo){
        if(typeof num !== "number"){
            return console.error(`El valor ${num} ingresado, no es un número`);
        }
    }
    return console.info(`Arreglo original: ${arreglo},\n Valor mayor: ${Math.max(...arreglo)},\n Valor menor: ${Math.min(...arreglo)}`);
}

arregloMinMax([1,4,5,99,-60]);

/*3) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero 
almacena los números pares y en el segundo los impares. 
Ej: miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/

const separarParesImpares = (arreglo = undefined) => {
    if(arreglo===undefined) return console.warn("No ingresaste un arreglo de números");
    if(!(arreglo instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arreglo.length === 0) return console.error("El arreglo está vacío");
    for(let num of arreglo){
        if(typeof num !== "number"){
            return console.error(`El valor ${num} ingresado, no es un número`);
        }
    }

    return console.info(`Arreglo original: ${arreglo},\n Pares: ${arreglo.filter(num => num %2 === 0)},\n Impares: ${arreglo.filter(num => num %2 !== 0)}`);
}

separarParesImpares([1,2,3,4,5,6,7,8,9,0]);

/*4) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente. 
Ej: miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

const ordenarArreglos = (arreglo = undefined) => {
    if(arreglo===undefined) return console.warn("No ingresaste un arreglo de números");
    if(!(arreglo instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arreglo.length === 0) return console.error("El arreglo está vacío");
    for(let num of arreglo){
        if(typeof num !== "number"){
            return console.error(`El valor ${num} ingresado, no es un número`);
        }
    }

    return console.info({
        arreglo,
        ascendente: arreglo.map(el=>el).sort(),
        descendente: arreglo.map(el=>el).sort().reverse()
    });
}

ordenarArreglos([7,5,7,8,6]);

/* 5) Programa una función que dado un arreglo de elementos, elimine los duplicados. 
Ej: miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/

const quitarDuplicados = (arreglo = undefined) => {
    if(arreglo===undefined) return console.warn("No ingresaste un arreglo de números");
    if(!(arreglo instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arreglo.length === 0) return console.error("El arreglo está vacío");
    if(arreglo.length === 1) return console.error("El arreglo debe tener por lo menos dos elementos");
    for(let num of arreglo){
        if(typeof num !== "number"){
            return console.error(`El valor ${num} ingresado, no es un número`);
        }
    }

    /*return console.info({
        original: arreglo,
        duplicado: arreglo.filter((value, index, self) => self.indexOf(value)===index),
    });*/

    //Otra manera

    return console.info({
        original: arreglo,
        duplicado: [... new Set(arreglo)]
    })
}

quitarDuplicados([7]);
quitarDuplicados([7,5,7,8,6,6,8,4,7,9]);
quitarDuplicados([7,5,7,8,6,7,8]);
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

/*6) Programa una función que dado un arreglo de números obtenga el promedio. 
Ej: promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/

const promedio = (arreglo = undefined) => {
    if(arreglo===undefined) return console.warn("No ingresaste un arreglo de números");
    if(!(arreglo instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
    if(arreglo.length === 0) return console.error("El arreglo está vacío");
    for(let num of arreglo){
        if(typeof num !== "number"){
            return console.error(`El valor ${num} ingresado, no es un número`);
        }
    }

    return console.info(
        arreglo.reduce((total, num, index, arreglo)=>{
            total += num;
            if(index === arreglo.length-1){
                return `El promedio de ${arreglo.join(" + ")} es ${total/arreglo.length}`
            }else{
                return total;
            }
        })
    );
}

promedio([7,5,7,8,6,6,8,4,7,9]);
promedio([1,2,3,4,5,6,7,8,9]);



