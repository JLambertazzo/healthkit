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
        type: [String],
        default: ['']
    },
    history: [{
        type: {old: [String], new: [String], comment: String, author: String, timestamp: Date},
        default: []
    }],
    options: {type: [String], default: []},
    isComplete: {type: Boolean, default: false }
}), 'Fields')

module.exports = { fieldModel }