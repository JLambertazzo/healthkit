const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { ObjectId } = Schema.Types

const reportModel = model('Report', new Schema({
    form: {type: ObjectId, required: true, unique: true, ref: "Form"},
    questions: {type: [String], required: true},
    groups: {type: [String], required: true},
    questionMap: {type: Map, of: String, required: true},
    created: {type: Date, default: (new Date())}
}), 'Reports')

module.exports = { reportModel }