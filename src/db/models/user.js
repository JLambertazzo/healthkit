const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userModel = model('User', new Schema({
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    password: String
}), 'Users')

module.exports = { userModel }