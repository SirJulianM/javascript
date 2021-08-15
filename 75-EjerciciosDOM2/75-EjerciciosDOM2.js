import hamburgerMenu from "./menuHamburguesa.js"
import {digitalClock, alarm} from "./reloj.js"
import {moveBall, shortcuts} from "./teclado.js";
import {countdown} from './cuentaRegresiva.js';

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock('#reloj', '#activarReloj', '#desactivarReloj');
    alarm('sound/ringtones-pink-panther.mp3', '#activarAlarma', '#desctivarAlarma');
    countdown("countdown", 'Sep 18, 2021 15:00:00', 'El reencuentro');
})

d.addEventListener("keydown", (e)=>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})