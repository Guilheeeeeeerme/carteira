var array = [];

// colocar no final do array
array.push(10);
array.push(50);
array.push("gui");
console.log(array);
// remover do final
var ultimo = array.pop();
console.log(ultimo);
console.log(array);

// limpando array
console.log('----------');
array = [];

// colocar no inicio do array
array.unshift(10);
array.unshift(50);
array.unshift("gui");
console.log(array);

// remover do inicio
var primeiro = array.shift();
console.log(ultimo);
console.log(array);

/*********************************/
array = [1,2,3,4,5];
var inverted = [];

console.log(array);

inverted.push( array.pop() )
inverted.push( array.pop() )
inverted.push( array.pop() )
inverted.push( array.pop() )
inverted.push( array.pop() )

console.log(inverted);

var index = null;

// inverted [5,4,3,2,1]
// primeiro indice 0

console.log(inverted[3]);

inverted[3] = new Date();

console.log(inverted);
console.log(inverted[3]);

// JEITO 1
for(var i = 0; i < inverted.length ; i++){
	console.log(i, inverted[i])
}

console.log('----------------')
// jeito 2, mais comum
// var i = 0; i < inverted.length ; i++
var soma = 0;
for (var i in inverted){
	// logica pra somar
	console.log(i, inverted[i])
}

console.log(soma);













