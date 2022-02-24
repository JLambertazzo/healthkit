const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { ObjectId } = Schema.Types

const userModel = model('User', new Schema({
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    password: String,
    sentForms: [{type: ObjectId, ref: 'Form'}],
    receivedForms: [{type: ObjectId, ref: 'Form'}],
    group: [{type: ObjectId, ref: 'Group'}]
}), 'Users')

module.exports = { userModel }