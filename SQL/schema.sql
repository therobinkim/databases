-- CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userId INT NOT NULL AUTO_INCREMENT,
  username varchar(30),
  PRIMARY KEY (userId)
);

CREATE TABLE messages (
  objectId INT NOT NULL AUTO_INCREMENT,
  message varchar(100),
  userId int(9),
  roomname varchar(30),
  createdAt timestamp,
  PRIMARY KEY  (objectId),
  FOREIGN KEY (userId) REFERENCES users(userId)
);




/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/




