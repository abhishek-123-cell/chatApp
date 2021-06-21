const mongoose = require("mongoose"),
  { Schema } = require("mongoose");
var messageSchema = new Schema({
  to: { type: String, required: true },
  from: { type: String, required: true },
  message: { type: String, required: true },
});
const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
