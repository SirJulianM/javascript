const $divsEventos = document.querySelectorAll(".eventosFlujos div"),
$linkEventos = document.querySelector(".eventosFlujos a");

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el clic lo originó ${e.target.className}`);
    e.stopPropagation();
}

console.log($divsEventos);

$divsEventos.forEach(div => {
    //Fase de burbuja (interno -> externo)
    div.addEventListener("click", flujoEventos);
    //div.addEventListener("click", flujoEventos, false);
    /* div.addEventListener("click", flujoEventos, {
        capture: false,
        once: true
    }); */
    //Fase de captura (externo -> interno)
    //div.addEventListener("click", flujoEventos, true);
    /* div.addEventListener("click", flujoEventos, {
        capture: true,
        once: true
    }); */
});

$linkEventos.addEventListener("click", (e) => {
    alert("Hola soy Julián Madrid");
    e.preventDefault();
    e.stopPropagation();
})