const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { ObjectId } = Schema.Types

const formModel = model('Form', new Schema({
    name: {type: String, required: true},
    description: {type: String, default: ""},
    fields: {type: [{type: ObjectId, ref: 'Field'}], default: []},
    numFields: {type: Number, default: 0},
    numComplete: {type: Number, default: 0},
    isSubmitted: {type: Boolean, default: false}
}), 'Forms')

module.exports = { formModel }