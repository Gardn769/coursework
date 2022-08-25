const { model, Schema } = require('mongoose');
const { ObjectId } = Schema.Types;

const messageSchema = new Schema({
  author: { type: ObjectId, required: true,   unique: false },
  sentAt: { type: Date,     required: true,   unique: false },
  text:   { type: String,   required: true,   unique: false },
  readAt: { type: Date,     required: false,  unique: false },
});

module.exports =  model('Message', messageSchema);