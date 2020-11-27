/*
Cortocircuito OR - Cuando el valor de la izquierda en la expresión siempre pueda validar 
a true, este es el valor que se cargará por defecto

Cortocircuito AND - Cuando el valor de la izquierda en la expresión siempre pueda validar
a false, este es el valor que se cargará por defecto
 */

 function saludar(nombre){
     nombre = nombre || "Desconocido";
     console.log(`Hola ${nombre}`);
 }

 saludar('Julián');
 saludar();

 console.log('Operador OR');
 console.log('cadena' || 'Valor de la derecha');
 console.log(19 || 'Valor de la derecha');
 console.log(true || 'Valor de la derecha');
 console.log([] || 'Valor de la derecha');
 console.log({} || 'Valor de la derecha');
 console.log(false || 'Valor de la derecha');
 console.log(null || 'Valor de la derecha');
 console.log(undefined || 'Valor de la derecha');
 console.log('' || 'Valor de la derecha');
 console.log(0 || 'Valor de la derecha');
 console.log(-2 || 'Valor de la derecha');

 console.log('Operador AND');
 console.log('cadena' && 'Valor de la derecha');
 console.log(19 && 'Valor de la derecha');
 console.log(true && 'Valor de la derecha');
 console.log([] && 'Valor de la derecha');
 console.log({} && 'Valor de la derecha');
 console.log(false && 'Valor de la derecha');
 console.log(null && 'Valor de la derecha');
 console.log(undefined && 'Valor de la derecha');
 console.log('' && 'Valor de la derecha');
 console.log(0 && 'Valor de la derecha');
 console.log(-2 && 'Valor de la derecha');