const $whatIsDOM = document.getElementById("que-es");

let text = `
<p> El modelo de objetos del documento(<b><i>DOM - Document Object Model</i></b>) es un API para documentos 
HTML y XML
</p>
<p> Esto provee una representación estructural del documento, permitiendo modificar su contenido y 
presentación visual mediante código JS
</p>
<p><mark> El DOM no es parte de la especialización de Javascript. Es una API para los navegadores
</mark></p>
`;

//$whatIsDOM.innerText = text; //Esta fue creada para Internet Explorer
$whatIsDOM.textContent = text; //Esta fue creada para el modelo estándar
$whatIsDOM.outerHTML = text; //La mejor opción
