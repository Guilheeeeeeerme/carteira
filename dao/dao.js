'use strict'

module.exports = function (model) {
  var self = this

  var mongoose = require('mongoose')
  mongoose.connect('mongodb://localhost/contas')

  self.model = mongoose.model('Conta', model)

  self.list = function (callback) {
    self.model.find(callback)
  }

  self.search = function (contaId, callback) {
    self.model.findOne({ id: contaId }, callback)
  }

  self.insert = function (conta, callback) {
    var model = new self.model(conta)
    model.save(callback)
  }

  self.update = function (conta, callback) {
    var model = new self.model(conta)
    model.update(callback)
  }

  self.remove = function (conta, callback) {
    var model = new self.model(conta)
    model.remove(callback)
  }
}
