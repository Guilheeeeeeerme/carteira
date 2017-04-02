var number = Math.random() * 1000;

number = Math.floor(number);

console.log(number);

var ehPar = (number % 2) == 0;

if( ehPar ){
	console.log('eh par');
} else {
	console.log('eh impar');
}


