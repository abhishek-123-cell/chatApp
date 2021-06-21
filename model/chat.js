const mongoose = require("mongoose");

var messageSchema = new Schema({
  to: { type: String, required: true },
  from: { type: String, required: true },
  message: { type: String, required: true },
});
const Message = mongoose.model("Message", messageSchema);
Message.find({ $or: [{ from: "upadhyay" }, { to: "abhishek" }] })
  .sort({ _id: -1 })
  .limit(1)
  .exec(function (err, docs) {
    // docs will now be an array containing 1 Message model
    docs = array;
    // [
    //         { "_id" : { "from" : "upadhyay" }, "to" : "abhishek", "message" : "Some message" },
    // ]
  });

module.exports = Message;

// we can used aggregation framework
