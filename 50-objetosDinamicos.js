const objUsuarios = {}
console.log(objUsuarios);

const usuarios = ["Julián", "Miguel", "Andrés", "Harrison", "Sebastian"];

usuarios.forEach((usuario, index)=>objUsuarios[`id_${index}`]=usuario)
console.log(objUsuarios);

//Otra opción para hacer objetos dinámicos

const aleatorio = Math.round(Math.random()*100+5)
const objUsuarios2 = {
    propidad: "Valor",
    [`id_${aleatorio}`]: "Valor aleatorio",
};

console.log(objUsuarios2);