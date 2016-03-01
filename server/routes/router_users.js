//////////////////
// users router //
//////////////////

// utility functions
const utils = require('../utils/utils');

// create express router 
const express = require('express');
const usersRouter = express.Router(); 

// db helpers
const db = require('../db/db.js');
const sequelize = db.sequelize;
const User = db.User;


////////////////////
// route handling //
////////////////////

  // main users route
  usersRouter.route('/')
   .get(utils.checkUser, (req, res) => {
     User.findAll({
       attributes: ["id", "username", "latitude", "longitude"],
       where: {
         id: {
          $ne: req.session.uid 
         }
       },
     }).then( (allUsers) => {
       res.send(200, allUsers);
     }).catch(utils.handleError(req, res, 500, "Unable to retrieve users from database"));
   });


module.exports = usersRouter;







// //////////////////
// // users router //
// //////////////////

// // utility functions
// const utils = require('../utils/utils');

// // create express router 
// const express = require('express');
// const usersRouter = express.Router(); 

// // db helpers
// const db = require('../db/db.js');
// const sequelize = db.sequelize;
// const User = db.User;


// ////////////////////
// // route handling //
// ////////////////////

//   // main users route
//   usersRouter.route('/')
//    .get(utils.checkUser, function(req, res) {
//      User.findAll({
//        attributes: ["id", "username", "latitude", "longitude"],
//        where: {
//          id: {
//           $ne: req.session.uid 
//          }
//        },
//      }).then(function(allUsers){
//        res.send(200, allUsers);
//      }).catch(utils.handleError(req, res, 500, "Unable to retrieve users from database"));
//    });


// module.exports = usersRouter;