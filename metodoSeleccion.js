const Arreglo=[54,73,76,81,91,94,99,05,07,11,13,14,15,17];
console.log(Arreglo);
console.time('loop')
let aux =0;
let pos =0;
for(let i=0; i<Arreglo.length; i++){
    let min = Arreglo[i];
    for(let j=i+1; j<Arreglo.length; j++){
        if(Arreglo[j]<min){
            min = Arreglo[j];
            pos = j;
        }
   }
   if(pos != i){
    aux = Arreglo[i];
    Arreglo[i] = Arreglo[pos];
    Arreglo[pos] = aux;
   }
}

console.log(Arreglo);
console.timeEnd('loop');
