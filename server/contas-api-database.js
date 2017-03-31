'use strict'

var bodyParser = require('body-parser')
var DAO = new require('./../dao/dao.js')

module.exports = function (app) {
  
  var contaModel = require('./../model/contas-model.js')

  var contasDAO = new DAO(contaModel)

  /**
   *	MECANISMOS DE BUSCAR PARAMETROS POST
   **/
  app.use(bodyParser.json()) // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

  /**
   *	listar todas
   **/
  app.get('/api/contas', function (req, res) {
    contasDAO.list(function (err, list) {
      if (err) {
        res.send(err)
      } else {
        res.send(list)
      }
    })
  })

  /**
   *	buscar uma conta
   **/
  app.get('/api/conta/:contaId', function (req, res) {
    contasDAO.search(req.params.contaId, function (err, conta) {
      if (err) {
        res.send(err)
      } else {
        res.send(conta)
      }
    })
  })

  /**
   *	Inserir um conta
   **/
  app.post('/api/conta', function (req, res) {
    contasDAO.insert(req.body, function (err, conta) {
      if (err) {
        res.send(err)
      } else {
        res.send(conta)
      }
    })
  })

  /**
   *	Atualizar uma existente
   **/
  app.put('/api/conta', function (req, res) {
    contasDAO.update(req.body, function (err, conta) {
      if (err) {
        res.send(err)
      } else {
        res.send(conta)
      }
    })
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
