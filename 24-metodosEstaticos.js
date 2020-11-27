//Las clases simplifica la estructura de lo escrito anteriormente

class Animal {
    /* El constructor es un método especial que se ejecuta en el momento de instanciar la clase */
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    //Métodos
    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`)
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        super(nombre, genero); //Es un método que manda a llamar los elementos del constructor padre
        this.tamanio = tamanio
        this.raza = null
    }
    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }
    ladrar() {
        console.log("Guau Guau");
    }
    /* Que eres es un método estático que se puede ejecutar sin necesidad de instanciar una frase */
    queEres() {
        console.log('Los perros somos animales mamiferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre')
    }
    /*Los setters y getters son elementos que nos permiten establecer y obtener los valores de atributos 
    de nuestra clase*/
    get getRaza(){
        return this.raza;
    }
    set setRaza(raza){
        this.raza = raza;
    }
}

const mimi = new Animal("Mimi", "Hembra"),
    scobby = new Perro("Scobby", 'Macho')

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scobby);
scobby.saludar();
scobby.sonar();
scobby.ladrar();
scobby.queEres();
console.log(scobby.getRaza);
scobby.setRaza = 'Gran danés';
console.log(scobby.setRaza);
console.log(scobby.getRaza);
