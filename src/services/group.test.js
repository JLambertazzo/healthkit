jest.mock("../db/models/form")
jest.mock("../db/models/group")
jest.mock("../db//models/user")

const {
    getGroup,
    createGroup,
    addUser,
    deleteGroup, 
    getAll,
    getByFormId
} = require('./group')

describe("Test group service", () => {
    test("getGroup returns mocked group", () => {
        return expect(getGroup("mockedid"))
            .resolves
            .toHaveProperty("_id", "mockedid")
    })

    test("createGroup returns new mocked group", () => {
        return expect(createGroup({ name: "mockedname" }))
            .resolves
            .toHaveProperty("name", "mockedname")
    })

    test("addUser resolves to mocked group", () => {
        return expect(addUser("mockedgroupid", "mockedid"))
            .resolves
            .toHaveProperty("group._id", "mockedgroupid")
    })

    test("deleteGroup resolves to mocked group", () => {
        return expect(deleteGroup("mockedid"))
            .resolves
            .toHaveProperty("_id", "mockedid")
    })

    test("getAll returns an array with 1 group", () => {
        return expect(getAll())
            .resolves
            .toContainEqual({_id: "mockedid", name: "mockedgroup"})
    })

    test("getByFormId resolves to mocked groups", () => {
        return expect(getByFormId("mockedid"))
            .resolves
            .toContainEqual({_id: "mockedid", name: "mockedgroup"})
    })
})