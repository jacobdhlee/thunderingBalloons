const Sequelize = require('Sequelize');
const path = require('path');
const sequelize = new Sequelize('meetme', null, null, {
  dialect: 'sqlite',
  storage: path.join(__dirname, 'meetme.sqlite'),
});

// Date needs to be passed in the following timestamp format
// Timestamp format : "2016-02-27 11:00:00 -0:00"
// -0:00 indicates offset from current time zone. Please -0:00 for offset
const User = sequelize.define('user', {
  username: Sequelize.STRING,
  hash: Sequelize.STRING,
  email: Sequelize.STRING,
  latitude: Sequelize.STRING,
  longitude: Sequelize.STRING,
});
  
const Event = sequelize.define('event', {
  event_name : Sequelize.STRING,
  org_id : Sequelize.INTEGER,
  venue_name : Sequelize.STRING,
  street : Sequelize.STRING,
  city : Sequelize.STRING,
  state : Sequelize.STRING,
  phone : Sequelize.STRING,
  event_time : Sequelize.DATE,
  rating : Sequelize.FLOAT,
  rating_img : Sequelize.STRING,
  image : Sequelize.STRING,
  yelp_link : Sequelize.STRING,
  latitude: Sequelize.FLOAT,
  longitude: Sequelize.FLOAT,
});

const Invitee = sequelize.define('invitee', {
  current_status : {
    type: Sequelize.ENUM,
    values: ['pending', 'accepted', 'rejected'],
  },
});

User.belongsToMany(Event, {through: 'Invitee' });
Event.belongsToMany(User, {through: 'Invitee'});

const Message = sequelize.define('event_message', {
  message: Sequelize.STRING,
});

User.belongsToMany(Event, {through: 'Messages' });
Event.belongsToMany(User, {through: 'Messages'});

module.exports = {
  User,
  Event,
  Invitee,
  sequelize,
  Sequelize,
}