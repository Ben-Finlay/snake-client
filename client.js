const net = require("net");
const {IPLOCAL, IPSCHOOL, PORTL, PORTS } = require('./constants');


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IPLOCAL, // IP address here,
    port: PORTL// PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    console.log(data);
  });

  conn.write('Name: ben')

/*
  setInterval(() => {
    conn.write("Move: up")
  }, 50)

  setTimeout(() => {
    conn.write("Move: up");
    setTimeout(() => {
      conn.write("Move: left");
      setTimeout(() => {
        conn.write("Move: down");
        setTimeout(() => {
          conn.write("Move: down");
        }, 50)
      }, 50)
    }, 50)
  }, 50)
 */ 

  conn.on('connect', () => {
    console.log("Get ready to snek snek snek");
   
  });
  return conn;
};

module.exports = {connect};