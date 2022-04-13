
const connect = require("./client")

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};



const handleUserInput = function () {
  if (key === 'q') {
    process.exit();
  }
};


setupInput();
// establishes a connection with the game server
console.log("Connecting ...");
connect();