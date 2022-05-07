const { userModel } = require('../db/models/user')
const { groupModel } = require('../db/models/group')
const bcrypt = require("bcrypt")
async function getUser(id) {
    try {
        return await userModel.findById(id)
    } catch(e) {
        console.log('error ocurred', e)
        return null
    }
}



async function createUser(user){ // hashed function
    try{
        const salt = await bcrypt.genSalt()
        const hashPass = await bcrypt.hash(user.password, salt)
        const group = user.group // array of group names
        let groupIds = await groupModel.find({name: {$in: group}})
        // create any group not found
        const toCreate = []
        for (const grp of group) {
            const found = groupIds.find(g => g.name === grp)
            if (!found) {
                toCreate.push({name: grp})
            }
        }
        const created = await groupModel.insertMany(toCreate)
        groupIds = [...groupIds.map(g => g._id), ...created.map(g => g._id)]
        const newUser = await userModel.create({...user, password: hashPass, group: groupIds})
        // insert new user to all referenced groups, should include created ones
        await groupModel.updateMany({name: {$in: group}}, {$push: {users: newUser._id}})
        return newUser
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


async function login(email, password) { //hashed login
    try {
        // emails are unique -- enforced in models
        const user = await userModel.findOne({ email })
        // comparison for passwords, should involve some hashing before comparison
        if (user && await bcrypt.compare(password, user.password)) {
            return user
        } else {
            return null
        }
    } catch(e) {
        console.log('error occurred', e)
        return null
    }
}

async function getByUsername(username, populated = false) {
    // get the currently logged in user
    try {
        // username is unique -- enforced in models
        user = populated ? await userModel.findOne({ username })
            .populate('sentForms')
            .populate('receivedForms')
            .populate('group')
            .populate({ path: 'receivedForms', populate: { path: 'fields', model: 'Field' } }) 
        : await userModel.findOne({ username })
        return user
    } catch(e) {
        console.log('error occurred', e)
        return null
    }
}

async function getUsersByGroup(group_id) {
    try {
        users = await userModel.find({ group: group_id })
        return users
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
    getByUsername,
    getUsersByGroup
}
