///////////////////
// places router //
///////////////////

// utility functions
const utils = require('../utils/utils');
const searchYelp = require('../utils/yelp')

// create express router 
const express = require('express');
const placesRouter = express.Router(); 


////////////////////
// route handling //
////////////////////

  // main places route
  placesRouter.route('/')
    .get(utils.checkUser, (req, res) => {

      let term = req.query.term;
      let lat = req.query.lat;
      let lon = req.query.lng;

      try {
        searchYelp(term, lat, lon, (data) => {
          res.json(data);
        });
      } 
      catch(err) {
        res.send(500, []);        
      }
    });


module.exports = placesRouter;



// ///////////////////
// // places router //
// ///////////////////

// // utility functions
// var utils = require('../utils/utils');
// var searchYelp = require('../utils/yelp')

// // create express router 
// var express = require('express');
// var placesRouter = express.Router(); 


// ////////////////////
// // route handling //
// ////////////////////

//   // main places route
//   placesRouter.route('/')
//     .get(utils.checkUser, function(req, res) {

//       var term = req.query.term;
//       var lat = req.query.lat;
//       var lon = req.query.lng;

//       try {
//         searchYelp(term, lat, lon, function(data){
//           res.json(data);
//         });
//       } 
//       catch(err) {
//         res.send(500, []);        
//       }
//     });


// module.exports = placesRouter;