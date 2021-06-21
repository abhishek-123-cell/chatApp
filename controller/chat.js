const socket = require("../model/chat");
const api_keys = JSON.parse(process.env.SOCKET_API_KEYS || "[]");
// SOCKET_API_KEYS=hfu45ugndjskwqk6790gkvbdg
/**
 * Server Side
 *
 */

module.exports = function socketAPIServer(apis) {
  server.on("connection", (socket) => {
    // this must be first - to block unauthenticated access to the APIs
    socket.use((packet, next) => {
      if (socket.auth) return next();
      else if (packet[0] === "authenticate" && api_keys.includes(packet[1])) {
        socket.auth = true;
        socket.emit("authenticated");
        return next();
      } else return next(new Error("unauthorized"));
    });
    socket.on("disconnect", () => {
      delete socket.auth;
    });
    apis.forEach((api) => {
      socket.on(api.name, api.func);
    });
  });
};
