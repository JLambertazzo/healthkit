const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { ObjectId } = Schema.Types

const groupModel = model('Group', new Schema({
    name: {type: String, required: true, unique: true},
    users: {type: [{type: ObjectId, ref: 'User'}], default: []},
    forms: {type: [{type: ObjectId, ref: 'Form'}], default: []}
}), 'Groups')

module.exports = { groupModel }