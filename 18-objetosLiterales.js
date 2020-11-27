let nombre = "Chepe",
edad = 3;

//Forma antigua (antes del 2015)
const cerdo = {
    nombre: nombre,
    edad: edad,
    grunir: function(){
        console.log('Oing Oing')
    },
}

console.log(cerdo);
cerdo.grunir();

//Forma nueva (después del 2015)
const pig = {
    nombre,
    edad,
    raza: 'Minipig',
    grunir(){
        console.log('Oing Oing Oing')
    }
}

console.log(pig);
pig.grunir();