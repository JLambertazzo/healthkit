// mock handles all our uses of fieldModel
const fieldModel = {
    find(query) {
        return Promise.resolve([{
            name: "mockedgroup",
            _id: "mockedid"
        }])
    },
    findById(id) {
        return Promise.resolve({
            _id: "mockedid",
            label: "mockedlabel",
            type: "mockedtype",
            value: "mockedvalue"
        })
    },
    create(field) {
        return Promise.resolve({
            ...field,
            _id: "mockedid"
        })
    },
    findOneAndUpdate(query, update) {
        return Promise.resolve({
            _id: "mockedid",
            label: "mockedlabel",
            type: "mockedtype",
            value: "mockedvalue"
        })
    }
}

exports.fieldModel = fieldModel