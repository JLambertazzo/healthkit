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

async function addUser(user_id) {
    try {
        return await userModel.findByIdAndUpdate(
            user_id,
            {$push: {users: user_id}},
            { returnDocument: true }
        )
    } catch (e) {
        console.error('error occurred', e)
        return null
    }
}

module.exports = {
    getGroup,
    createGroup,
    addUser
}