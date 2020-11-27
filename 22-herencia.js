function animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
    //Métodos agregados al prototipo de la función constructora
    animal.prototype.sonar = function () {
        console.log('Hago sonidos porque estoy vivo');
    }
    animal.prototype.saludar = function(){
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

//Herencia prototipica

function gato(nombre, genero, tamanio){
    this.super = animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

gato.prototype = new animal();
gato.prototype.constructor = gato;

//Sobrescritura de métodos del prototipo padre en el hijo

gato.prototype.sonar = function() {
    console.log('Soy un gato y mi sonido es un maullido');
}
gato.prototype.maullar = function() {
    console.log('Miau Miau');
}

const Felix = new gato('Felix', 'Macho', 'Mediano');
const Snoopy = new animal('Snoopy','Macho');
const LolaBunny = new animal('Lola Bunny', 'Hembra');

console.log(Felix);
Felix.sonar();
Felix.saludar();
Felix.maullar();
console.log(Snoopy);
Snoopy.sonar();
Snoopy.saludar();
console.log(LolaBunny);
LolaBunny.sonar();
LolaBunny.saludar();