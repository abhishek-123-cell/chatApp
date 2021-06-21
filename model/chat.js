const mongoose = require("mongoose");

var messageSchema = new mongoose.Schema({
  to: { type: String, required: true },
  from: { type: String, required: true },
  message: { type: String, required: true },
});
const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
