import hamburgerMenu from "./menuHamburguesa.js"
import {digitalClock, alarm} from "./reloj.js"
import {moveBall, shortcuts} from "./teclado.js";
import countdown from './cuentaRegresiva.js';
import scrollTopButton from "./botonScroll.js";
import darkTheme from "./temaOscuro.js";
import responsiveMedia from "./objetoResponsive.js";
import responsiveTester from "./pruebaResponsive.js";
import userDeviceInfo from "./deteccionDispositivos.js";
import networkStatus from "./deteccionRed.js";
import webCam from "./deteccionWebcam.js";
import getGeolocalization from "./geolocalizacion.js";
import searchFilters from "./filtroBusqueda.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scrollEspia.js";
import smartVideo from "./videoInteligente.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock('#reloj', '#activarReloj', '#desactivarReloj');
    alarm('sound/ringtones-pink-panther.mp3', '#activarAlarma', '#desctivarAlarma');
    countdown("countdown", 'Sep 18, 2022 15:00:00', 'El reencuentro');
    scrollTopButton(".scroll-top-btn");
    responsiveMedia
    (
        "youtube", 
        "(min-width: 1024px)", 
        `<a href="https://youtu.be/04854XqcfCY" target="_blank" rel="noopener noreferrer">Ver vídeo</a>`, 
        `<iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/04854XqcfCY" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture" 
        allowfullscreen></iframe>`
    );
    responsiveMedia
    (
        "gmaps", 
        "(min-width: 1024px)", 
        `<a href="https://goo.gl/maps/xeToqujPntrnbeh17" target="_blank" rel="noopener noreferrer">Ver mapa</a>`, 
        `<iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8145311813555!2d-75.602709685907!3d6.155589429040292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4683677a71ec2b%3A0x4b27b7c8df873564!2sCausi%20parroquia%20San%20Juan%20Diego!5e0!3m2!1ses-419!2sco!4v1636154609629!5m2!1ses-419!2sco" 
        width="600" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy"></iframe>`
    );
    responsiveTester('responsive-tester');
    userDeviceInfo('user-device');    
    webCam('webcam');
    getGeolocalization('geolocation');
    searchFilters('.card-filter', '.card');
    draw("#winner-btn",".player");
    slider();
    scrollSpy();
    smartVideo();
})

d.addEventListener("keydown", (e)=>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();