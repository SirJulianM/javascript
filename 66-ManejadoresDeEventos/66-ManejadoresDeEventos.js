function HolaMundo(){
    alert('Hola Mónica');
    console.log(event);
}

const $eventoSemantico = document.getElementById("manejadorSemantico"),
$eventoMultiple = document.getElementById("manejadorMultiple");

$eventoSemantico.onclick = HolaMundo; 
/* Nota: Si le pongo los parentesis, se carga cada vez que carga la página, así solo funciona cada vez 
que presione el botón*/
$eventoSemantico.onclick = function(e){
    alert('Hola mundo manejador de eventos');
    console.log(e);
    console.log(event);
};

$eventoMultiple.addEventListener('click', HolaMundo);
$eventoMultiple.addEventListener('click', (e) =>{
    alert('Hola mundo de eventos múltiples');
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});