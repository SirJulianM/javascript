const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
cardContent = [
    {
        title: "National",
        img: "http://lorempixel.com/400/400"
    },
    {
        title: "Cecilia",
        img: "http://lorempixel.com/400/400"
    },
    {
        title: "Esteban",
        img: "http://lorempixel.com/400/400"
    },
    {
        title: "Stefan",
        img: "http://lorempixel.com/400/400"
    },
    {
        title: "María",
        img: "http://lorempixel.com/400/400"
    }
    
];

cardContent.forEach((el) => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone)
});

$cards.appendChild($fragment);