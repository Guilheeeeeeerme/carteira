'use strict'

var bodyParser = require('body-parser')

module.exports = function (app) {
  /**
   *	MECANISMOS DE BUSCAR PARAMETROS POST
   **/
  app.use(bodyParser.json()) // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

  /**
   *	listar todas
   **/
  app.get('/api/contas', function (req, res) {

    var list = []

    // listar todas as contas

    res.send(list)

  })

  /**
   *	buscar uma conta
   **/
  app.get('/api/conta/:contaId', function (req, res) {

    var conta = {}

    // listar todas as contas

    res.send(conta)

  })

  /**
   *	Inserir um conta
   **/
  app.post('/api/conta', function (req, res) {

    var conta = req.body;

    // gerar um id
    // adicionar na lista

    // devolver pra tela
    res.send(conta)

  })

  /**
   *	Atualizar uma existente
   **/
  app.put('/api/conta', function (req, res) {

    var conta = req.body;

    // gerar um id
    // adicionar na lista

    // devolver pra tela
    res.send(conta)

  })

  /**
   *	Remover uma existente
   **/
  app.delete('/api/conta', function (req, res) {
    contasDAO.remove(req.body, function (err, conta) {
      if (err) {
        res.send(err)
      } else {
        res.send(conta)
      }
    })
  })
}
