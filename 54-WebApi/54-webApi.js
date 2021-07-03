console.log(window);
console.log(document);
let texto = "Hola, soy Julián Madrid y si Dios quiere veré a Mónica el sábado";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto);