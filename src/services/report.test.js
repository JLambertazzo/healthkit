jest.mock("../db/models/report")
jest.mock("../db/models/form")
jest.mock("../db/models/group")

// const { reportModel } = require("../db/models/report")
const { getReport, generateReport } = require("./report")

test("getReport returns mocked report", () => {
    return expect(getReport("mockedid"))
        .resolves
        .toHaveProperty("form", "mockedid")
})

test("generateReport runs and returns mocked report", () => { // NOT WORKING FINISH TMRW
    return expect(generateReport("mockedid"))
        .resolves
        .toHaveProperty("_id", "mockedid")
})