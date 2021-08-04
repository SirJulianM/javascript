import hamburgerMenu from "./menuHamburguesa.js"
import {digitalClock, alarm} from "./reloj.js"

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock('#reloj', '#activarReloj', '#desactivarReloj');
    alarm('sound/ringtones-pink-panther.mp3', '#activarAlarma', '#desctivarAlarma');
})