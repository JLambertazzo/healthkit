const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { ObjectId } = Schema.Types

const groupModel = model('Group', new Schema({
    name: {type: String, required: true},
    users: [{type: ObjectId, ref: 'User'}],
    forms: [{type: ObjectId, ref: 'Form'}]
}), 'Groups')

module.exports = { groupModel }