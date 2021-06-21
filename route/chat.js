const express = require("express");
const router = express.Router();
const chat = require("../controller/chat");
router.get("/chat", chat.socketAPIServer);
router.get("/allMessage", chat.displayMessage);

module.exports = router;
