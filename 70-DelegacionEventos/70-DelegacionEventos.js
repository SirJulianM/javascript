const $divsEventos = document.querySelectorAll(".eventosFlujos div"),
$linkEventos = document.querySelector(".eventosFlujos a");

function flujoEventos(e){
    console.log(`Hola te saluda ${this}, el clic lo originó ${e.target.className}`);
    e.stopPropagation();
}

document.addEventListener("click", (e) => {
    console.log('click en', e.target);
    if(e.target.matches('.eventosFlujos div')){
        flujoEventos(e);
    }
    if(e.target.matches('.eventosFlujos a')){
        alert("Hola soy Julián Madrid");
        e.preventDefault();
    }
});

