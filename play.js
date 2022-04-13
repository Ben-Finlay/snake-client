const net = require("net");
const connect = require("./client")

// establishes a connection with the game server



console.log("Connecting ...");
connect();

/*  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  */