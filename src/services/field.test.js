jest.mock("../db/models/form")
jest.mock("../db/models/field")

const { getField, createField, updateField } = require("./field")

describe("Test field service", () => {
    test("getField returns mocked field", () => {
        return expect(getField("mockedid"))
            .resolves
            .toHaveProperty("_id", "mockedid")
    })

    test("createField returns new field", () => {
        return expect(createField("mockedid", {}))
            .resolves
            .toHaveProperty("_id", "mockedid")
    })

    test("updateField returns correct field", () => {
        return expect(updateField({}, {}))
            .resolves
            .toHaveProperty("_id", "mockedid")
    })
})