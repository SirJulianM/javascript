//Módulo Import - Export

console.log('Archivos Modulos.js');

import monik, {PI, usuario, saludar} from './32b-import_export.js'
import {aritmetica} from './32c-import_export.js'

console.log(PI, usuario);
console.log(aritmetica.sumar(3,4), aritmetica.restar(7,5));

saludar();
//console.log(password);
let Monica = new monik();

Monica;

/* 
Nota: 

1) Nunca quitar el type Module de HTML ya que en caso de quitarlo estos archivos nunca se conectarán 
2) No debes exportar todo, solo exporta lo que necesites
3) Si no has dicho que vas a exportar algo, este nunca se transladará
*/