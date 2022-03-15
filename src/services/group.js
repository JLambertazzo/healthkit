const { formModel } = require('../db/models/form')
const { groupModel } = require('../db/models/group')
const { userModel } = require('../db/models/user')

async function getGroup(id) {
    try {
        return await groupModel.findById(id)
    } catch (e) {
        console.error('error occurred', e)
        return null
    }
}

async function createGroup(group) {
    try {
        return await groupModel.create(group)
    } catch (e) {
        console.error('error occurred', e)
        return null
    }
}

async function addUser(group_id, user_id) {
    try {
        const userRes = await userModel.findByIdAndUpdate(
            user_id,
            {$push: {group: group_id}},
            { returnDocument: true }
        )
        const groupRes = await groupModel.findByIdAndUpdate(
            group_id,
            {$push: {users: user_id}},
            { returnDocument: true }
        )
        return {user, group}
    } catch (e) {
        console.error('error occurred', e)
        return null
    }
}

async function deleteGroup(id) {
    try {
        return await groupModel.findByIdAndDelete(id)
    } catch(e) {
        console.error('error occurred', e)
        return null
    }
}

async function getAll() {
    try {
        return await groupModel.find()
    } catch (e) {
        console.error('error occurred', e)
        return null
    }
}

async function getByFormId(form_id) {
    try {
        const sentForms = await formModel.find({ parent: form_id })
        let groupIds = sentForms.map(form => form.group)
        return await groupModel.find({ _id: { $in: groupIds } })
    } catch (e) {
        console.error(e)
        return null
    }
}

module.exports = {
    getGroup,
    createGroup,
    addUser,
    deleteGroup,
    getAll,
    getByFormId,
}