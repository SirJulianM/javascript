console.log("Inicio");
setTimeout(()=>{
    console.log("Ejecutando un setTimeout, esto se ejecuta una sola vez");
}, 5000);
/*setInterval(() => {
    console.log("Ejecutando un setInterval, esto se ejecuta cada cierto intervalo de tiempo");
}, 10000);*/
let temporalizador = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 2000);

let temporalizador2 = setTimeout(() => {
    console.log("Hola Mónica, felicitaciones por tu éxito");
}, 6000);

clearTimeout(temporalizador2);
console.log("Después del clearTimeout");

clearInterval(temporalizador);
console.log("Después del clearInterval");