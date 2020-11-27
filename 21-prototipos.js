/* 
POO
Clases - Modelo a seguir
Objetos - Es la instancia de una clase
Atributos - Es una característica o propiedad del objeto (son variables dentro de un objeto)
Métodos - Son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
 */

const animal1 = {
    nombre: 'Snoppy',
    sonar(){
        console.log('Ladro porque estoy vivo');
    }
}

const animal2 = {
    nombre: 'CHP',
    sonar(){
        console.log('Gruño porque estoy vivo');
    }
}

console.log(animal1);
console.log(animal2);
console.log(animal1.sonar());
console.log(animal2.sonar());

//Función constructora

function animal3(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
    //Métodos
    /* this.sonar = function () {
        console.log('Hago sonidos porque estoy vivo');
    }
    this.saludar = function(){
        console.log(`Hola, me llamo ${this.nombre}`)
    } */
    //Métodos agregados al prototipo de la función constructora
    animal3.prototype.sonar = function () {
        console.log('Hago sonidos porque estoy vivo');
    }
    animal3.prototype.saludar = function(){
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

const Snoopy = new animal3('Snoopy','Macho')
const LolaBunny = new animal3('Lola Bunny', 'Hembra')

console.log(Snoopy);
Snoopy.sonar();
Snoopy.saludar();
console.log(LolaBunny);
LolaBunny.sonar();
LolaBunny.saludar();