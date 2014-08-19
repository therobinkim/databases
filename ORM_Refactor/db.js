/* You'll need to
 * npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "");


/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = sequelize.define('User', {
  username: Sequelize.STRING
});

var Message = sequelize.define('Message', {
  userid: Sequelize.INTEGER,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});

/* .sync() makes Sequelize create the database table for us if it doesn't
 *  exist already: */
User.sync().success(function() {
  console.log("ORM (25): Sync was successful!");
});

Message.sync();

exports.findAllMessages = function(cb){
  Message.findAll().success(function(data) {
    cb(null, data);
  });
};

exports.findUser = function(username, cb){
  User.findAll({ where: {username: username} }).success(function(data) {
    cb(null, data);
  });
};

exports.saveUser = function(username, cb){
  User.create({username: username}).success(function(data){
    var obj = [{userid: data.dataValues.id}];
    cb(obj);
  });
};

exports.saveMessage = function(message, userid, roomname, cb){
  Message.create({message: message, userid: userid, roomname: roomname}).success(function(data){
    cb();
  });
};
