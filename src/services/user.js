const { userModel } = require('../db/models/user')

async function getUser(id) {
    return await userModel.findById(id)
}

async function createUser(user) {
    // hash password here
    return await userModel.create(user)
}

module.exports = {
    getUser,
    createUser,
}