const { fieldModel } = require('../db/models/field')

async function getField(id) {
    try {
        return await fieldModel.findById(id)
    } catch(e) {
        console.error('error occurred', e)
        return null
    }
}

async function createField(field) {
    try {
        return await fieldModel.create(field)
    } catch(e) {
        console.error('error occurred', e)
        return null
    }
}

module.exports = {
    getField,
    createField
}