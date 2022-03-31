// mock handles all our uses of groupModel
const groupModel = {
    find(query) {
        return Promise.resolve([{
            name: "mockedgroup",
            _id: "mockedid"
        }])
    },
    findById(id) {
        return Promise.resolve({
            name: "mockedgroup",
            _id: id
        })
    },
    findByIdAndUpdate(id) {
        return Promise.resolve({
            name: "mockedgroup",
            _id: id
        })
    },
    findByIdAndDelete(id) {
        return Promise.resolve({
            name: "mockedgroup",
            _id: id
        })
    },
    create(group) {
        return Promise.resolve({
            ...group,
            _id: "mockedid"
        })
    }
}

exports.groupModel = groupModel