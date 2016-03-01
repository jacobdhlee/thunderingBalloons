//////////////////
// login router //
//////////////////

// dependencies
const bcrypt = require('bcrypt');
const utils = require('../utils/utils');

// create express router 
const express = require('express');
const loginRouter = express.Router();

// db helpers
const db = require('../db/db.js');
const sequelize = db.sequelize;
const User = db.User;


////////////////////
// route handling //
////////////////////

// main login route
loginRouter.route('/')
  .get( (req,res) => {
    res.render('login');
  })
  .post( (req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    sequelize.sync().then( () => {
      User.findOne({
        where: {'username': username} 
      })
      .then( (matchedUser) => {
        if (!matchedUser) { res.redirect('/'); }
        else {
          bcrypt.compare(password, matchedUser.dataValues.hash, (err, match) => {
            if (match) {
              utils.createSession(req, res, username, matchedUser.dataValues.id);
            } else {
              res.render('login');
            }
          });
        }
      }).catch(utils.handleError(req, res, 500, "Error while trying to find user in database."));
    }).catch(utils.handleError(req, res, 500, "Error while trying to sync with database."));
  });


module.exports = loginRouter;








// //////////////////
// // login router //
// //////////////////

// // dependencies
// const bcrypt = require('bcrypt');
// const utils = require('../utils/utils');

// // create express router 
// const express = require('express');
// const loginRouter = express.Router();

// // db helpers
// const db = require('../db/db.js');
// const sequelize = db.sequelize;
// const User = db.User;


// ////////////////////
// // route handling //
// ////////////////////

// // main login route
// loginRouter.route('/')
//   .get(function(req,res){
//     res.render('login');
//   })
//   .post(function(req,res){
//     var username = req.body.username;
//     var password = req.body.password;
//     sequelize.sync().then(function() {
//       User.findOne({
//         where: {'username': username} 
//       })
//       .then(function(matchedUser){
//         if (!matchedUser) { res.redirect('/'); }
//         else {
//           bcrypt.compare(password, matchedUser.dataValues.hash, function(err, match) {
//             if (match) {
//               utils.createSession(req, res, username, matchedUser.dataValues.id);
//             } else {
//               res.render('login');
//             }
//           });
//         }
//       }).catch(utils.handleError(req, res, 500, "Error while trying to find user in database."));
//     }).catch(utils.handleError(req, res, 500, "Error while trying to sync with database."));
//   });


// module.exports = loginRouter;
