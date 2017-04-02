var pessoa = {
	nome: "guilherme",
	idade: 23,
	registradoEm: new Date()
}

//console.log(pessoa);

//console.log(pessoa.nome);
//console.log(pessoa['nome'])

// criando campo
pessoa.profissao = 'desenvolvedor';
//console.log(pessoa);

pessoa['cidade'] = 'tres corações';
//console.log(pessoa);

// deletando campo
delete pessoa.registradoEm;

pessoa.endereco = {
	rua: 'tigre maia',
	numero: 100
}

{}


//console.log(pessoa);

pessoa.endereco.cidade = pessoa.cidade;

pessoa.endereco.estado = {
	nome: 'Minas Gerais',
	sigla: 'MG',
	comida: 'pao de queijo',
	tags: ['montanha', 'uai', 'trem', 'sô', 'nóis']
}

delete pessoa.cidade;

//console.log(pessoa)

var estado = pessoa.endereco.estado;

//console.log(estado);

var pessoas = [pessoa, {
	nome: 'thiaguinho'
}]

console.log(pessoas)


// puts, cidade nao é atributo de pessoa...