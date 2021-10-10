CREATE DATABASE IF NOT EXISTS mtp;

USE mtp;

SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS entries;             
DROP TABLE IF EXISTS users;                 

CREATE TABLE entries (
    id INTEGER NOT NULL, 
    entry_date DATE, 
    description_short VARCHAR(500), 
    description_long VARCHAR(10000)
)   CHARSET=utf8;

CREATE TABLE users (
    id INTEGER NOT NULL, 
    username VARCHAR(50), 
    password VARCHAR(200), 
    email VARCHAR(50)
)   CHARSET=utf8;