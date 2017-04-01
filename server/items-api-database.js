'use strict';

var bodyParser = require('body-parser');
var DAO = new require('./../dao/dao.js');

module.exports = function (app, socket) {

	var itemModel = require('./../model/items-model.js');

	var itemsDAO = new DAO('item', itemModel);

    /**
     *    MECANISMOS DE BUSCAR PARAMETROS POST
     **/
	app.use(bodyParser.json()); // support json encoded bodies
	app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

    /**
     *    listar todas
     **/
	app.get('/api/items', function (req, res) {
		itemsDAO.list(function (err, list) {
			if (err) {
				res.send(err);
			} else {
				res.send(list);
			}
		});
	});

    /**
     *    buscar uma item
     **/
	app.get('/api/item/:itemId', function (req, res) {
		itemsDAO.search(req.params.itemId, function (err, item) {
			if (err) {
				res.send(err);
			} else {
				res.send(item);
			}
		});
	});

    /**
     *    Inserir um item
     **/
	app.post('/api/item', function (req, res) {
		itemsDAO.insert(req.body, function (err, item) {
			if (err) {
				res.send(err);
			} else {
				res.send(item);
			}
		});
	});

    /**
     *    Atualizar uma existente
     **/
	app.put('/api/item', function (req, res) {
		itemsDAO.update(req.body, function (err, item) {
			if (err) {
				res.send(err);
			} else {
				res.send(item);
			}
		});
	});

    /**
     *    Remover uma existente
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
