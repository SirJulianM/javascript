console.log(Date()); //Trae los datos del día de hoy y la ubicación en donde estoy

let fecha = new Date();
console.log(fecha); //Me trae fecha y hora 

console.log(fecha.getDate()); //Me trae el día en el que estamos hoy

console.log(fecha.getDay()); //Me trae el código del día de la semana de cero a seis

console.log(fecha.getMonth()); //Me trae el código del mes del año del cero al 11

console.log(fecha.getFullYear()); //Me trae el año

console.log(fecha.getHours());

console.log(fecha.getMinutes());

console.log(fecha.getSeconds());

console.log(fecha.getMilliseconds());

console.log(fecha.toString()); //Trae la fecha y la hora en formato texto

console.log(fecha.toDateString()); //Trae solo la fecha en formato texto

console.log(fecha.toLocaleString()); //Trae la fecha y la hora en otro formato

console.log(fecha.toLocaleDateString()); //Trae la fecha en otro formato

console.log(fecha.toLocaleTimeString()); //Trae la fecha en formato 24 horas

console.log(fecha.getUTCDate());

console.log(fecha.getUTCHours());

console.log(Date.now()); //Formato desde 1970

//Para usar fechas, hay que hacerlo con Moment.js

let cumpleMonik = new Date(1972, 8, 29);
console.log(cumpleMonik);