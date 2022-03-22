const { formModel } = require('../db/models/form')
const { userModel } = require('../db/models/user')
const { fieldModel } = require('../db/models/field')
const { groupModel } = require('../db/models/group')
const { updateField, createField } = require('./field')

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
        const form = await formModel.findById(form_id)
        const newFields = []
        for (const field of fields) {
            const found = form.fields.find(f => f.label === field.label)
            let updatedField;
            if (found && found.value !== field.value) {
                // TODO specify author and comment
                updatedField = await updateField(field._id, field.value, "author")
                newFields.push(updatedField)
            } else {
                updatedField = await createField(form_id, field)
                newFields.push(updatedField)
            }
        }
        return await formModel.findOneAndUpdate({ _id: form_id }, {
            $set: { fields: newFields, numFields: newFields.length }
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

/**
 * Send the form to given targets
 * @param {*} sender username of the user sending the form
 * @param {*} id id of the form to be sent
 * @param {*} targets array of objects { email, group }, that specify what user to send a form to and which group to register it in
 */
async function sendForm(sender, id, targets) {
    try {
        const form = await formModel.findById(id);
        if (!form) {
            return null;
        }
        await userModel.findOneAndUpdate({ username: sender }, { $push: { sentForms: form._id } })
        const parentId = form._id;
        for (const target of targets) {
            // create form copy - points to original
            const newForm = await formModel.create({
                name: form.name,
                description: form.description,
                fields: form.fields,
                numComplete: form.numComplete,
                group: await groupModel.find({ name: target.group }),
                parent: form._id
            });
            await userModel.findOneAndUpdate({ email: target.email }, { $push: { receivedForms: newForm._id } });
        }
        return form
    } catch (e) {
        console.error(e);
        return null;
    }
}

module.exports = {
    getForm,
    createForm,
    setFields,
    sendByEmails,
    deleteForm,
    isComplete,
    isSubmitted,
    submitForm,
    sendForm,
}