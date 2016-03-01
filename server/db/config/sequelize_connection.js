///////////////////////////////////////////////
// sequelize connection po postgres database //
///////////////////////////////////////////////


const config = require('./config');
const env = config.development;
const Sequelize = require('sequelize');
let conString = env.dialect+'://'+env.username+':'+env.password+'@'+env.host+':'+env.port+'/'+env.database;
let sequelize = new Sequelize(conString, {
  dialect: 'postgres',
});


module.exports = sequelize;



// var config = require('./config');
// var env = config.development;
// var Sequelize = require('sequelize');
// var conString = env.dialect+'://'+env.username+':'+env.password+'@'+env.host+':'+env.port+'/'+env.database;
// var sequelize = new Sequelize(conString, {
//   dialect: 'postgres',
// });


// module.exports = sequelize;
