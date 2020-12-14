let mapa = new Map();
mapa.set("nombre", "Julián");
mapa.set("apellido", "Madrid");
mapa.set("edad", 33);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("correo"));
console.log(mapa.has("edad"));
console.log(mapa.get("nombre"));
mapa.set("nombre", "Julián Esteban");
console.log(mapa)
mapa.delete("edad");
console.log(mapa);

mapa.set(19, "diecinueve");
mapa.set(false, "falso");
mapa.set({}, {})
console.log(mapa);

for(let [key, value] of mapa){
    console.log(`Llave: ${key}, Valor: ${value}`);
}

const mapa2 = new Map([
    ['nombre', 'Mónik'],
    ['apellido', 'Hincapié'],
    ['edad', 48],
    [null, 'nulo']
]);

console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);