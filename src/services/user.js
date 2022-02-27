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
        // currently leaves dead user ids in groups
        return await userModel.findByIdAndDelete(id)
    } catch(e) {
        console.log('error occurred', e)
        return null
    }
}

async function login(email, password) {
    try {
        // emails are unique -- enforced in models
        const user = await userModel.findOne({ email })
        // comparison for passwords, should involve some hashing before comparison
        if (user && user.password === password) {
            return user
        } else {
            return null
        }
    } catch(e) {
        console.log('error occurred', e)
        return null
    }
}

async function getByUsername(username) {
    // get the currently logged in user
    try {
        // username is unique -- enforced in models
        return await userModel.findOne({ username })
    } catch(e) {
        console.log('error occurred', e)
        return null
    }
}

module.exports = {
    getUser,
    createUser,
    deleteUser,
    login,
    getByUsername
}