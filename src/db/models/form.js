const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { ObjectId } = Schema.Types

const formModel = model('Form', new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    fields: [{type: ObjectId, ref: 'Field'}]
}), 'Forms')

module.exports = { formModel }