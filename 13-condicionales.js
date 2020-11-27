let edad = 21

if(edad>=18){
    console.log("La persona es mayor de edad")
}else{
    console.log("La persona es menor de edad")
}

/*
Nota: Cuando estoy utilizando los operadores mayor y menor que sin igualdad, estoy excluyendo al número que
estoy comparando, pero si incluyo el igual, lo estoy incluyendo

> != >=

*/

/*
Ejercicios con if anidados

Déjame dormir: 0-5
Buenos días: 6-11
Buenas tardes: 12-18
Buenas noches: 19-23

*/

let hora = 15;
if(hora>=0 && hora <=5){
    console.log("Déjame dormir, carajo");
}
else if(hora>=6 && hora <=11){
    console.log("Buenos días")
}
else if(hora>=12 && hora <=18){
    console.log("Buenas tardes")
}
else if(hora>=19 && hora <=23){
    console.log("Buenas noches")
}
else{
    console.log("Hora no existente")
}

/* 
Operador ternario (condición) ? verdadero : falso
*/
console.log("Operador ternario")
let esMayor = (edad>=18) ? "Es mayor de edad" : "Es menor de edad"
console.log(esMayor)

/*
Switch - Case

Domingo = 0;
Lunes = 1;
Martes = 2;
Miércoles = 3;
Jueves = 4;
Viernes = 5;
Sábado = 6;

*/

let dia = 5;

switch (dia) {
    case 0:
        console.log("Es Domingo");
        break;
    case 1:
        console.log("Es Lunes");
        break;
    case 2:
        console.log("Es Martes");
        break;
    case 3:
        console.log("Es Miércoles");
        break;
    case 4:
        console.log("Es Jueves");
        break;
    case 5:
        console.log("Es Viernes");
        break;
    case 6:
        console.log("Es Sábado");
        break;
    default:
        console.log("Dia no existente")
        break;
}

