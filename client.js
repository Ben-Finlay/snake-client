const net = require("net");
const { stdin } = require("process");
const std = process.stdin

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.1.223', // IP address here,
    port: 50542// PORT number here,
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

module.exports = connect;

//const stdin = process.stdin;
//Command to name snake
//client.write('Name: ben')
//whenever you click w ==== client.write('Move: up')
//stdin.on('data', (input) => {
//  client.write(`${name}: ${input}`)
//})