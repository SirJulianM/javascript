//window.alert("Alerta");
//window.confirm("Confirmación");
//window.prompt("Aviso");

const $btnAbrir = document.getElementById("AbrirVentana"),
$btnCerrar = document.getElementById("CerrarVentana"),
$btnImprimir = document.getElementById("ImprimirVentana");

let ventana = undefined;
$btnAbrir.addEventListener("click", e=>{
    ventana = window.open("https://jonmircha.com");
});
$btnCerrar.addEventListener("click", e=>{
    //window.close();
    ventana.close();
    /* Nota: No ejecutar el window.close con el parentesis vacío ya que cerrarías la pestaña que está vacía  */
});
$btnImprimir.addEventListener("click", e=>{
    window.print();
})