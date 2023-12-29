const mongoosses = require("mongoose");

const messageSchema = new mongoosses.Schema(
  { chatId: String, senderId: String, text: String },
  {
    timestamps: true,
  }
);

const messageModel = mongoosses.model("Message", messageSchema);

module.exports = messageModel;
