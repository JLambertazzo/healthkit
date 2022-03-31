// mock handles all our uses of groupModel
const groupModel = {
    find(query) {
        return Promise.resolve([{
            name: "mockedgroup",
            _id: "mockedid",
            populate() { return this }
        }])
    }
}

exports.groupModel = groupModel