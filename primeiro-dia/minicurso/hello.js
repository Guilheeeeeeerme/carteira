var a = Math.random() * 1000;
var b = Math.random() * 1000;

console.log('○ ceil arredonda pra cima');
console.log(a, Math.ceil(a) );
console.log(b, Math.ceil(b) );

console.log('○ floor arredonda pra baixo');
console.log(a, Math.floor(a) );
console.log(b, Math.floor(b) );

var mensagemNoConsole = 'O maior eh: ' + Math.max(a, b) + ' !!!';
console.log( mensagemNoConsole );