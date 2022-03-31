const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { ObjectId } = Schema.Types

const userModel = model('User', new Schema({
    name: {type: String, required: true},
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    sentForms: {type: [{type: ObjectId, ref: 'Form'}], default: []},
    receivedForms: {type: [{type: ObjectId, ref: 'Form'}], default: []},
    group: {type: [{type: ObjectId, ref: 'Group'}], default: []}
}), 'Users')

module.exports = { userModel }