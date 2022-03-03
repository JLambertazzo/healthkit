const { formModel } = require('../db/models/form')
const { userModel } = require('../db/models/user')
const { fieldModel } = require('../db/models/field')

async function getForm(id) {
    try {
        return await formModel.findById(id)
    } catch(e) {
        console.error('error occurred', e)
        return null
    }
}

async function createForm(form) {
    try {
        return await formModel.create(form)
    } catch(e) {
        console.error('error occurred', e)
        return null
    }
}

async function setFields(form_id, fields) {
    try {
        return await formModel.findByIdAndUpdate(
            form_id,
            {$set: 
                {
                    fields: fields,
                    numFields: fields.length
                }
            },
            { returnDocument: true }
        )
    } catch(e) {
        console.error('error occurred', e)
        return null
    }
}

async function sendByEmails(form_id, emails) {
    if (!Array.isArray(emails)) {
        emails = [emails]
    }
    try {
        // check for valid form id
        const isValid = !!(await formModel.findById(form_id))
        if (!isValid) {
            return null
        }
        return await userModel.updateMany(
            {email: {$in: emails}},
            {$push: {receivedForms: form_id}},
            { returnDocument: true }
        )
    } catch(e) {
        console.error('error occurred', e)
        return null
    }
}

async function deleteForm(id) {
    try {
        return await formModel.findByIdAndDelete(id)
    } catch(e) {
        console.error('error occurred', e)
        return null
    }
}

async function removeField(id, field_id) {
    try {
        await formModel.findByIdAndUpdate(
            id, 
            { $pull: { fields: field_id } },
            { $inc: { numFields: -1 } } // Check here if field was complete then reduce number of completed fields    
        )
        return await fieldModel.findByIdAndDelete(field_id)
    } catch(e) {
        console.error('error occurred', e)
        return null
    }
}


/**
 * Check if all the questions in the form are answered or not
 * @param {*} id Id of the form
 * @returns True if all the questions in the form are answered else False.
 *          Returns null in case of an error
 */
async function isComplete(id) {
    try {
        const form = await formModel.findById(id)
        return form.numFields === form.numComplete
    } catch(e) {
        console.error('error occured', e)
        return null
    }
}

module.exports = {
    getForm,
    createForm,
    setFields,
    sendByEmails,
    deleteForm,
    removeField
}