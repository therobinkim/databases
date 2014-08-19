-- CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userid INT NOT NULL AUTO_INCREMENT,
  username varchar(30),
  PRIMARY KEY (userid)
);

CREATE TABLE messages (
  objectid INT NOT NULL AUTO_INCREMENT,
  message varchar(100),
  userid int(9),
  roomname varchar(30),
  createdAt timestamp,
  PRIMARY KEY  (objectid),
  FOREIGN KEY (userid) REFERENCES users(userid)
);




/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/




