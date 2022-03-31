// mock handles all our uses of formModel
async function noop() { return Promise.resolve(this) } // used to mock populate
const formModel = {
    mocked: true,
    findById(id) {
        const form = Promise.resolve({
            name: "mockedform",
            _id: "mockedid",
            fields: [{label: "mockedfield", value: "mockedvalue"}],
            parent: null
        })
        Promise.prototype.populate = noop;
        return form
    },
    find(query) {
        const forms = Promise.resolve([{
            name: "mockedform",
            _id: "mockedid",
            isSubmitted: true,
            group: "mockedgroup",
            fields: [{label: "mockedfield", value: "mockedvalue"}]
        }])
        Promise.prototype.populate = noop;
        return forms
    },
    findByIdAndUpdate(id, query) {
        return Promise.resolve({ // TODO what should this really return?
            name: "mockedform",
            _id: "mockedid",
        })
    }
}

exports.formModel = formModel