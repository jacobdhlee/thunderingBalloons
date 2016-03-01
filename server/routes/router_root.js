/////////////////
// root router //
/////////////////

// dependencies
const utils = require('../utils/utils');
const path = require('path');

// create express router 
const express = require('express');
const rootRouter = express.Router();


////////////////////
// route handling //
////////////////////

// main root route
rootRouter.route('/')
  .get(utils.checkUser, (req, res) => {
    console.log('/ route req body', req.body);
    res.sendfile(path.resolve('client/first.html')); 
  });

// logout route
rootRouter.route('/logout')
  .get( (req, res) => {
    req.session.destroy( () => {
      res.redirect('/');
    });
  });

// wildcard route
rootRouter.route('/*')
  .get( (req, res) => {
    res.redirect('/');
  });


module.exports = rootRouter;








// /////////////////
// // root router //
// /////////////////

// // dependencies
// var utils = require('../utils/utils');
// var path = require('path');

// // create express router 
// var express = require('express');
// var rootRouter = express.Router();


// ////////////////////
// // route handling //
// ////////////////////

// // main root route
// rootRouter.route('/')
//   .get(utils.checkUser, function(req, res) {
//     console.log('/ route req body', req.body);
//     res.sendfile(path.resolve('client/first.html')); 
//   });

// // logout route
// rootRouter.route('/logout')
//   .get(function(req, res) {
//     req.session.destroy(function(){
//       res.redirect('/');
//     });
//   });

// // wildcard route
// rootRouter.route('/*')
//   .get(function(req, res){
//     res.redirect('/');
//   });


// module.exports = rootRouter;
