//Seth

const set = new Set([1,2,3,4,5,4,false,true,{},false,{},"Julián", "Mónik", "Hola"]);
console.log(set);
console.log(set.size);

const set2 = new Set();
console.log(set2);
set2.add('Sofía');
set2.add('Andrés'),
set2.add(true);
set2.add(true);
set2.add({})
console.log(set2);
console.log(set2.size);

console.log("Recorriendo set");
for(item of set){
    console.log(item);
}

console.log("Recorriendo set2");
set2.forEach(item => console.log((item)));

let arreglo = Array.from(set);
console.log(arreglo);
console.log(arreglo[0]);

set.delete("Hola");
console.log(set);

console.log(set.has("Mónik"));
console.log(set.has(19));

set2.clear();
console.log(set2);
