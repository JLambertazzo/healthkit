const { fieldModel } = require('../db/models/field')
const { formModel } = require('../db/models/form')

async function getField(id) {
    try {
        return await fieldModel.findById(id)
    } catch(e) {
        console.error('error occurred', e)
        return null
    }
}

async function createField(form_id, field) {
    try {
        const fieldRes = await fieldModel.create(field)
        await formModel.findByIdAndUpdate(
            form_id,
            {$push: {fields: field._id}}
        )
        return fieldRes
    } catch(e) {
        console.error('error occurred', e)
        return null
    }
}

async function updateField(field_id, value, author, comment = "") {
    try {
        const target = await fieldModel.findById(field_id)
        if (value === target.value) {
            return target
        }
        const history = {
            old: target.value,
            new: value,
            author,
            comment,
            timestamp: (new Date())
        }
        return await fieldModel.findOneAndUpdate({ _id: field_id }, {
            $set: {
                value
            },
            $push: {
                history
            }
        })
    } catch(e) {
        console.error('error occurred', e)
        return null
    }
}

module.exports = {
    getField,
    createField,
    updateField
}