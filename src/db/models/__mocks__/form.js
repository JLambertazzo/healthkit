// mock handles all our uses of formModel
const formModel = {
    findById(id) {
        return Promise.resolve({
            name: "mockedform",
            _id: "mockedid",
            populate() { return this }
        })
    },
    find(query) {
        return Promise.resolve([{
            name: "mockedform",
            _id: "mockedid",
            isSubmitted: true,
            populate() { return this }
        }])
    },
    findByIdAndUpdate(id) {
        return Promise.resolve({ // TODO what should this really return?
            name: "mockedform",
            _id: "mockedid",
            populate() { return this }
        })
    }
}

exports.formModel = formModel