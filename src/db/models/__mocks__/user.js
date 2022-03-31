// mock handles all our uses of userModel
const userModel = {
    find(query) {
        return Promise.resolve([{
            name: "mocked user",
            username: "mockeduser",
            email: "mocked@us.er",
            password: "mockedpassword",
        }])
    },
    findById(id) {
        return Promise.resolve({
            name: "mocked user",
            username: "mockeduser",
            email: "mocked@us.er",
            password: "mockedpassword",
        })
    },
    findByIdAndUpdate(id, update) {
        return Promise.resolve({
            name: "mocked user",
            username: "mockeduser",
            email: "mocked@us.er",
            password: "mockedpassword",
        })
    },
    create(user) {
        return Promise.resolve({
            ...user,
            _id: "mockedid"
        })
    }
}

exports.userModel = userModel