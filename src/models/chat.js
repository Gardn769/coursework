const { model, Schema } = require('mongoose');
const { Message }  = require ('./message.js');
const { ObjectId } = Schema.Types;

const chatSchema = new Schema({
  users:      { type: [ObjectId],   required: true,   unique: false },
  createdAt:  { type: Date,         required: true,   unique: false },
  messages:   { type: [Message],    required: false,  unique: false },
});

module.exports =  model('Chat', chatSchema);