const persona = {
    nombre: '',
    apellido: '',
    edad: 0
}

const manejador = {
    set(obj, prop, valor){
        if(Object.keys(obj).indexOf(prop)===-1){
            return console.error(`La propiedad '${prop}' no existe en el objeto persona`);
        }
        if(
            (prop === "nombre" || prop === "apellido") &&
            !(/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(valor))
        ){
            return console.error(`La propiedad '${prop}' solo acepta letras y espacios en blanco`);
        }
        obj[prop] = valor;
    }
}

const datos = new Proxy(persona, manejador);
datos.nombre = "Julián87";
datos.apellido = "Madrid";
datos.edad = 33;
datos.twitter = "SirJulianM";
console.log(datos);