///////////////////
// invite router //
///////////////////

// utility functions
const utils = require('../utils/utils');

// create express router 
const express = require('express');
const inviteRouter = express.Router(); 

// db helpers
const sequelize = require('../db/db.js').sequelize;


////////////////////
// route handling //
////////////////////

// main invite route
inviteRouter.route('/')
  .put(utils.checkUser, (req, res) => {
    let uid = req.session.uid;
    let eid = req.body.eid;
    let status = req.body.status;

    let query = "UPDATE invitees SET current_status = '" + status + "' WHERE (uid = " + uid + " and eid = " + eid + ")";
    sequelize.query(query).spread( (updated, metadata) => {
      if (updated) {
        res.send(200, "Invite updated")
      }
    }).catch(utils.handleError(req, res, 500, "Error while updating invitee information in database."));
  });


module.exports = inviteRouter;



// ///////////////////
// // invite router //
// ///////////////////

// // utility functions
// const utils = require('../utils/utils');

// // create express router 
// const express = require('express');
// const inviteRouter = express.Router(); 

// // db helpers
// const sequelize = require('../db/db.js').sequelize;


// ////////////////////
// // route handling //
// ////////////////////

// // main invite route
// inviteRouter.route('/')
//   .put(utils.checkUser, function(req, res) {
//     var uid = req.session.uid;
//     var eid = req.body.eid;
//     var status = req.body.status;

//     var query = "UPDATE invitees SET current_status = '" + status + "' WHERE (uid = " + uid + " and eid = " + eid + ")";
//     sequelize.query(query).spread(function(updated, metadata){
//       if (updated) {
//         res.send(200, "Invite updated")
//       }
//     }).catch(utils.handleError(req, res, 500, "Error while updating invitee information in database."));
//   });


// module.exports = inviteRouter;