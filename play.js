const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.1.223', // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to the server");
   
  });
  return conn;
};


console.log("Connecting ...");
connect();