const numeros = [1,2,3,4,5,6,7,8,9,0]

for (let i=0; i<numeros.length; i++){
    if(i===5){
        break; //Cuenta hasta la posición cuatro y rompe el ciclo
    }
    console.log(numeros[i]);
}

for (let i=0; i<numeros.length; i++){
    if(i===5){
        continue; //Cuenta hasta la posición cuatro, se salta el cinco y continua en la posición seis
    }
    console.log(numeros[i]);
}

