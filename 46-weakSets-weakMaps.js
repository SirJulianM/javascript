//Weakset

//const ws = new WeakSet([1,2,3,4,5,true,false,true,{},{},'Julián','Mónik']) Esto no se hace

const ws = new WeakSet();

let valor1 = {valor1: 1};
let valor2 = {valor2: 2};
let valor3 = {valor3: 3};
let valor4 = {valor4: 4};

ws.add(valor1);
ws.add(valor2);
ws.add(valor3);

console.log(ws);
console.log(ws.has(valor1));
console.log(ws.has(valor4));

ws.delete(valor2);
console.log(ws);

ws.add(valor2);

/*setInterval(() => {
    console.log(ws);
}, 1000);*/

setTimeout(() => {
    valor1 = null;
    valor2 = null;
    valor3 = null;
}, 5000);

//Weakmaps

/*const wm = new WeakMap([
    ['nombre', 'Mónik'],
    ['apellido', 'Hincapié'],
    ['edad', 48],
    [null, 'nulo']
]);*/

const wm = new WeakMap();

let obj1 = {};
let obj2 = {};
let obj3 = {};
let obj4 = {};

wm.set(obj1, 1);
wm.set(obj2, 2);
wm.set(obj3, 3);

console.log(wm);
console.log(wm.has(obj4));
console.log(wm.has(obj1));

console.log(wm.get(obj1));
console.log(wm.get(obj3));

wm.delete(obj2);

console.log(wm);

wm.set(obj2, 2);

/*setInterval(() => {
    console.log(wm);
}, 1000);*/

setTimeout(() => {
    obj1 = null;
    obj2 = null;
    obj3 = null;
}, 5000);

//No usar los setIntervals ya que se quedan ejecutando de manera infinita