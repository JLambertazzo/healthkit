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
        return await formModel.updateOne( {_id: form_id }, {
            $set: {
                fields: fields,
                numFields: fields.length
            }
        })
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

/**
 * Check if all the questions in the form are answered or not.
 * @param {*} id Id of the form.
 * @returns True if all the questions in the form are answered else False.
 *          Returns null in case of an error.
 */
async function isComplete(id) {
    try {
        const form = await formModel.findById(id)
        return form.numFields === form.numComplete
    } catch(e) {
        console.error('error occurred', e)
        return null
    }
}

/**
 * Returns of the form is submitted or not.
 * @param {*} id Id of the form.
 * @returns True if form is submitted, False otherwise. Null on error.
 */
async function isSubmitted(id) {
    try {
        const form = await formModel.findById(id)
        return form.isSubmitted
    } catch(e) {
        console.error('error occurred', e)
        return null
    }
}

/**
 * Function to mark a form as submitted.
 * @param {*} id Id of the form.
 * @returns True if the opration was successful, false if unsuccessful. Null on error.
 */
async function submitForm(id) {
    try {
        const form = await formModel.findById(id)
        if(form.isSubmitted) {
            return false
        }
        if(formModel.numComplete !== formModel.numFields) {
            return false
        }
        return await formModel.findOneAndUpdate({_id: id}, {$set:
            { isSubmitted: true }
        })
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
    deleteForm,
    submitForm
}