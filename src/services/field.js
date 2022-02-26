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

module.exports = {
    getField,
    createField
}