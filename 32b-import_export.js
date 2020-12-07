//Constantes

export const PI = Math.PI;

export let usuario = "Julián";
let password = "LiveSabaneta8606";

//export default password;

export function saludar(){
    console.log("Hola módulos + ES6")
}

export default class monik{
    constructor(){
        console.log("Hola bella dama, se encuentra espectacular el día de hoy")
    }
}

/*
Nota: No se puede poner a las variables o a las constantes la opción de export default no funciona de inmediato
debes definirla y luego ponerle export default para evitar errores, solo se pueden exportar por default
definiendo inmediatamente funciones y clases,

Solo se puede un default por clase
*/