const { userModel } = require('../db/models/user')

async function getUser(id) {
    try {
        return await userModel.findById(id)
    } catch(e) {
        console.log('error ocurred', e)
        return null
    }
}

async function createUser(user) {
    // hash password here
    try {
        return await userModel.create(user)
    } catch(e) {
        console.log('error occurred', e)
        return null
    }
}

async function deleteUser(id) {
    try {
        return await userModel.findByIdAndDelete(id)
    } catch(e) {
        console.log('error occurred', e)
        return null
    }
}

module.exports = {
    getUser,
    createUser,
    deleteUser
}