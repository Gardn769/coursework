const { model, Schema } = require('mongoose');
const { ObjectId } = Schema.Types;

const advertisementSchema = new Schema({
    shotrTitle:   { type: String,   required: true,   unique: false },
    description:  { type: String,   required: false,  unique: false },
    images:       { type: [String], required: false,  unique: false },
    userId:       { type: ObjectId, required: true,   unique: false },
    createdAt:    { type: Date,     required: true,   unique: false },
    updatedAt:    { type: Date,     required: true,   unique: false },
    tags:         { type: [String], required: false,  unique: false },
    isDeleted:    { type: Boolean,  required: true,   unique: false },
});

module.exports =  model('Advertisement', advertisementSchema);