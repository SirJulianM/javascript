let objeto = new String("Hola");
console.log(objeto); //String en formato objeto

const objeto2 = {};
console.log(objeto2); //Objetos vacíos

const objeto3 = new Object();
console.log(objeto3);   //Otra forma de llamar a los objetos (aunque ya no se acostumbra)

/* 
Dentro de un objeto, a las variables se les van a llamar atributos/propiedades 
y a las funciones se les llama métodos 
*/

const objeto4 = {
    nombre: "Andrés",
    apellidos: "Madrid Hincapié",
    edad: 7,
    pasatiempos: ["Jugar fútbol", "Estudiar", "Nadar", "Leer"],
    soltero: true,
    contacto: {
        email: "andres@gmail.com",
        twitter: "elverdolaga2013",
        movil: "123456"
    },
    saludar: function(){
        console.log(`Hola a todos`)
    },
    decirMiNombre: function(){
        console.log(`Hola, mi nombre es ${this.nombre}`)
    }
}
console.log(objeto4);
console.log(objeto4["nombre"]); //Notación no muy usada, se recomienda más la siguiente
console.log(objeto4.apellidos);
console.log(objeto4.pasatiempos[1]);
console.log(objeto4.contacto.email);
objeto4.saludar();
objeto4.decirMiNombre();

console.log(Object.keys(objeto4)) //Método que me permite enlistar todas las llaves del objeto
console.log(Object.values(objeto4)) //Método que me permite enlistar todos los valores del objeto
console.log(objeto4.hasOwnProperty("nombre")); //Valida si alguna de las propiedades está dentro del objeto
console.log(objeto4.hasOwnProperty("nacimiento"));