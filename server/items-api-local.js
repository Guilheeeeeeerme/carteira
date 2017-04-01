'use strict';

var bodyParser = require('body-parser');

module.exports = function (app, socket) {
  /**
   *	MECANISMOS DE BUSCAR PARAMETROS POST
   **/
	app.use(bodyParser.json()); // support json encoded bodies
	app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

  /**
   *	listar todas
   **/
	app.get('/api/items', function (req, res) {

		var list = [];

    // listar todas as items

		res.send(list);

	});

  /**
   *	buscar uma item
   **/
	app.get('/api/item/:itemId', function (req, res) {

		var item = {};

    // listar todas os items

		res.send(item);

	});

  /**
   *	Inserir um item
   **/
	app.post('/api/item', function (req, res) {

		var item = req.body;

    // gerar um id
    // adicionar na lista

    // devolver pra tela
		res.send(item);

	});

  /**
   *	Atualizar uma existente
   **/
	app.put('/api/item', function (req, res) {

		var item = req.body;

    // gerar um id
    // adicionar na lista

    // devolver pra tela
		res.send(item);

	});

  /**
   *	Remover uma existente
   **/
	app.delete('/api/item', function (req, res) {
		itemsDAO.remove(req.body, function (err, item) {
			if (err) {
				res.send(err);
			} else {
				res.send(item);
			}
		});
	});
};
