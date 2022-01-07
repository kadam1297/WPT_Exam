const Promise = require("bluebird");
const mysql = require("mysql");
const{query} = require("express");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "details2",
 };

 const selectAlluser = async() => {
     const connection = mysql.createConnection(dbinfo);
     await connection.connectAsync();
     console.log("Server Started");
     let sql = `select * from message`;
     const list = await connection.queryAsync(sql);
     console.log(list);
     await connection.endAsync();
 };

 const addUser = async (user) => {
     const connection = mysql.createConnection(dbinfo);
     await connection.connectAsync();
     let sql = `insert into message (msg) values(?)`;
     connection.queryAsync(sql,[user.msg]);
     connection.endAsync();

 }

 selectAlluser();
 const user = {
     msg: "hii, how are you",
 }
 addUser(user);


