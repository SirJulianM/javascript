const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Hola"),
$card = document.querySelector(".cards"),
$figure2 = document.createElement("figure");

$img.setAttribute("src", "http://lorempixel.com/400/400");
$img.setAttribute("alt", "Cecilia");
$figure.classList.add("card");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$card.appendChild($figure);

$figure2.innerHTML = `
<img src="http://lorempixel.com/400/400" alt="Sofia">
<figcaption>Hola</figcaption>
`;

$figure2.classList.add("card");
$card.appendChild($figure2);

const Estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
$ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>"); //No usar ya que está en desuso, se usa más innerHTML.
document.body.appendChild($ul);

Estaciones.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

const Continentes = ["América", "Europa", "Asia", "Africa", "Oceanía"],
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>"); 
document.body.appendChild($ul2);
$ul2.innerHTML = "";
Continentes.forEach((el)=> (
    $ul2.innerHTML += `<li>${el}</li>`
))

const Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

Meses.forEach((el)=> {
    const $li2 = document.createElement("li");
    $li2.textContent = el;
    $fragment.appendChild($li2);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);