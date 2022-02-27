const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { ObjectId } = Schema.Types

const formModel = model('Form', new Schema({
    name: {type: String, required: true},
    description: {type: String, default: ""},
    fields: {type: [{type: ObjectId, ref: 'Field'}], default: []}
}), 'Forms')

module.exports = { formModel }