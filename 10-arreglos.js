const Monik1=[54,73,76,81,91,94,99,05,07,11,13,14,15,17];
const Monik2=[];
const Julian=["Queen 1", "Queen 2", "Sheer Heart Attack", ["Live at the Rainbow", "Live Killers", "Rock Montreal", "Live at the Bowl", "Live at Wembley"]]
const Juan = Array.of("League of Leyends", "World of Warcraft", "Doom", "Wolfenstein", "Twisted Metal")
const Falso = Array(10).fill(false); //Llenar un arreglo con el mismo valor
//Esta manera de usar los arreglos ya no se usan y no se acostumbra a trabajar con ellas
const No1 = new Array();
const No2 = new Array(1,2,3,'a','b','c')
console.log(Monik1);
console.log(Monik2);
console.log(Monik1[3]);  //Imprimo a Mónik en la posición 3 
console.log(Monik1.length);  //Imprimo la cantidad de elementos del arreglo
console.log(Julian[3][1]); //Imprime el elemento de un arreglo que está dentro de otro arreglo
console.log(Juan);
console.log(Falso);
console.log(No1);
console.log(No2)
No2.push('d')   //Agrega un elemento en la última posición
console.log(No2)
No2.pop()       //Quita el elemento de la última posición
console.log(No2)
No2.forEach(function(el,index) {
    console.log(`<li id="${index}">${el}</li>`)
});

/* 
Notas: 
1) Debo tener en cuenta que la posición en los arreglos comienza desde cero
2) Si hay un arreglo, dentro de otro arreglo, dentro de otro arreglo, dentro de otro arreglo; debo poner un tercer corchete y así sucesivamente
Ej: A[4][4][1]

*/ 