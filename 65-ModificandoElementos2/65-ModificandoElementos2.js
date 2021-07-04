const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");

/*$newCard.innerHTML = `
<img src="http://lorempixel.com/400/400" alt="Queen">
<figcaption>Queen</figcaption>`;

$newCard.classList.add("card");*/

//$cards.insertAdjacentElement("beforebegin", $newCard); //Por fuera de la sección en la parte superior
//$cards.insertAdjacentElement("afterbegin", $newCard); //Por dentro de la sección como primer hijo
//$cards.insertAdjacentElement("beforeend", $newCard); //Por dentro de la sección como último hijo
//$cards.insertAdjacentElement("afterend", $newCard); //Por fuera de la sección en la parte inferior

let $contentCard = `
<img src="http://lorempixel.com/400/400" alt="Queen">
<figcaption></figcaption>`;

$newCard.classList.add("card");
$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any")
$cards.insertAdjacentElement("afterbegin", $newCard); 

//$cards.prepend($newCard); //Por dentro de la sección como primer hijo
//$cards.before($newCard); //Por fuera de la sección en la parte superior
//$cards.append($newCard); //Por dentro de la sección como último hijo
//$cards.after($newCard); //Por fuera de la sección en la parte inferior