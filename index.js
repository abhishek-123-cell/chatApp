const express = require("express");
const app = express();
const port = 8001;
const db = require("./config/mongoose");
// app.use("/", require("./route"));
const chatServer = require("http").Server(app);

const routers = require("./route/chat");
const chatSocket = require("./config/chat_sockets").chatSockets(chatServer);
chatServer.listen(5000);
console.log("chat server is running");
app.use("/api", routers);
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
