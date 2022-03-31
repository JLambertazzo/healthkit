// mock handles all our uses of reportModel
const reportModel = {
    findOne(query) {
        return Promise.resolve({
            form: "mockedid",
            questions: [],
            groups: [],
            questionMap: {},
            populate() { return this }
        })
    },
    create(doc) {
        return Promise.resolve({
            ...doc,
            _id: "mockedid"
        })
    }
}

exports.reportModel = reportModel