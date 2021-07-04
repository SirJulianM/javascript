const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure"),
$cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src="http://lorempixel.com/400/400" alt="Queen">
<figcaption>Queen</figcaption>`;


$newCard.classList.add("card");
//$cards.replaceChild($newCard, $cards.children[2]); //Coloca un elemento en la tercera parte
//$cards.insertBefore($newCard, $cards.firstElementChild); //Coloca un elemento en primer lugar
//$cards.removeChild($cards.lastElementChild); //Quita el último elemento de la lista
document.body.appendChild($cloneCards); //Duplica un elemento
