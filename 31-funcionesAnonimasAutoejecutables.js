//Función autónoma autoejecutable

(function(){
    console.log("Mi primer IIFE");
})();

(function(d,w,c){
    console.log("Mi segunda IIFE");
    console.log(d);
    console.log(w);
    c.log("Este es un console log");
})(document, window, console);
//alert('Hola Mónik');

//Formas de escribir las funciones anónimas autoejecutables

//Clásica
(function(){
    console.log("Versión clásica");
})();

//La Crockfood (Javascript: The Gods parts)
((function(){
    console.log("Versión Crockfood");
})());

//Versión Unaria
+function(){
    console.log("Versión Unaria");
}();

//Versión Facebook
!function(){
    console.log("Versión Facebook");
}();