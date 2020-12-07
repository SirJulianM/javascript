/* 
Antes de explicar como funciona el modelo de Javascript, 
es importante conocer algunos conceptos 

- Procesamiento singleThread y multiThread
- Operaciones de CPU y opeaciones de I/O
- Operaciones concurrentes y paralelas
- Opearaciones bloqueantes y no bloqueantes
- Operaciones sincrónicas y asincrónicas

Javascript usa un modelo asincrónico y no bloqueante
con un loop de eventos implementando en un solo
hilo (single thread) para operaciones de entrada y 
salida (input / output)

*/

//Código asincrónico bloqueante

(()=>{
    console.log("Código sincrónico");
    console.log("Inicio");

    function dos(){
        console.log(2);
    }

    function uno(){
        console.log(1);
        dos();
        console.log(3);
    }

    uno();
    console.log("Fin");
})()

console.log("***************");

//Código asincrónico no bloqueante

(()=>{
    console.log("Código asincrónico");
    console.log("Inicio");

    function dos(){
        setTimeout(() => {
            console.log(2);
        }, 1000);
    }

    function uno(){
        setTimeout(() => {
            console.log(1);
        }, 0);
        dos();
        console.log(3);
    }

    uno();
    console.log("Fin");

})()