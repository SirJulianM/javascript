//Ejecutar desde un navegador, ya que si ejecuta con Node, muestra cosas totalmente distintas

console.log(this);

this.lugar='Contexto global';

function saludar(){
    console.log(`${this.lugar}`);
}

function saludar2(saludo, aQuien){
    console.log(`${saludo}, ${aQuien} desde el ${this.lugar}`);
}

//saludar(); Llama al contexto global

const obj = {
    lugar: 'Contexto objeto'
}

this.nombre = "Mónica";

const persona = {
    nombre: 'Sofía',
    saludar: function(){
        console.log(`Hola ${this.nombre}`);
    }
}

const otraPersona = {
    //saludar: persona.saludar.bind(persona)
    saludar: persona.saludar.bind(this)
}

persona.saludar();

otraPersona.saludar();

//Call

saludar.call(); //Llama al contexto global
saludar.call(obj); //Llama al contexto objeto
saludar2.call(obj, 'Hola', 'Julián');
saludar2.call(null, 'Hola', 'Julián');
saludar2.call(this, 'Hola', 'Julián');

//Apply

saludar.apply(); //Llama al contexto global
saludar.apply(obj); //Llama al contexto objeto
saludar2.apply(obj, ['Adiós', 'Julián']);
saludar2.apply(null, ['Adiós', 'Julián']);
saludar2.apply(this, ['Adiós', 'Julián']);

//Bind