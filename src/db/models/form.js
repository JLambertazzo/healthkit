const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { ObjectId } = Schema.Types

const schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, default: ""},
    fields: {type: [{type: ObjectId, ref: 'Field'}], default: []},
    numFields: {type: Number, default: 0},
    isSubmitted: {type: Boolean, default: false},
    group: {type: ObjectId, required: false, ref: "Group"},
    parent: {type: ObjectId, required: false, ref: "Form"},
    created: {type: Date, required: false, default: (new Date())},
    modified: {type: Date, required: false, default: null},
    sent: {type: Boolean, default: false}
})

schema.pre('updateOne', function(next) {
    this.getUpdate().$set.modified = new Date()
    next()
})

const formModel = model('Form', schema, 'Forms')

module.exports = { formModel }