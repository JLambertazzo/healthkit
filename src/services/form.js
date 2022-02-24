const { formModel } = require('../db/models/form')
const { userModel } = require('../db/models/user')

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
            {$set: {fields: fields}},
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

module.exports = {
    getForm,
    createForm,
    setFields,
    sendByEmails,
}