var config = require('../config/config');
var env = config.development;
var Sequelize = require('sequelize');
var sequelize = new Sequelize(env.dialect+'://'+env.username+':'+env.password+'@'+env.host+':'+env.port+'/'+env.database);

"use strict";

  var Message = sequelize.define('event_message',
  {
    uid : Sequelize.INTEGER,
    eid : Sequelize.INTEGER,
    message: Sequelize.STRING,
  });

  module.exports = Message;