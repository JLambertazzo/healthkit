const { userModel } = require('../db/models/user')
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
        const salt = await bcrypt.genSalt();
        const hashPass = await bcrypt.hash(user.password, salt);
        await userModel.create({...user, password: hashPass});
        return user
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
        user = await userModel.findOne({ username })
        if (populated) {
            user = user.populate()
        }
        return user
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