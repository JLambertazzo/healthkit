const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { ObjectId } = Schema.Types

const fieldModel = model('Field', new Schema({
    label: {type: String, required: true},
    type: {
        type: String,
        required: true,
        enum: ['text', 'multiple', 'single', 'select', 'date', 'time', 'date-range', 'time-range', 'number', 'address']
    },
    value: {
        type: String,
        required: true
    },
    options: {type: [String], default: []}
}), 'Fields')

module.exports = { fieldModel }