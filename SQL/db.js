var mysql = require('mysql');
var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

dbConnection.connect();
/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module
.*/


exports.findAllMessages = function(cb){
  var query = dbConnection.query("SELECT * FROM messages", function(err, result){
    cb(err, result);
  });
};

exports.findUser = function(username, cb){
  var query = dbConnection.query('SELECT userid FROM users WHERE username = ?', username, function(err, result){
    cb(err, result);
  });
};

exports.saveUser = function(username, cb){
  var addThis = {username: username};
  var query = dbConnection.query("INSERT into users SET ?", addThis, function(err, result){
    if(err) { throw err; }

    var obj = [{userid: result.insertId}];
    cb(obj);
  });
};

exports.saveMessage = function(message, userid, roomname, cb){
  var post = {message: message, userid: userid, roomname: roomname};
  dbConnection.query("INSERT into messages SET ?", post, function(err, result){
    if(err) { throw err; }
    cb();
  });
};
