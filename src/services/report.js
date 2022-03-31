const { formModel } = require("../db/models/form")
const { groupModel } = require("../db/models/group")
const { reportModel } = require("../db/models/report")

async function getReport(form_id) {
    try {
        return await reportModel.findOne({ form: form_id })
    } catch(e) {
        console.error('an error occurred')
        return null
    }
}

async function generateReport(form_id) {
    try {
        // get parent and all children, assumes form_id is the parent's id
        let parent = await formModel.findById(form_id).populate("fields")
        // clean input, make sure we know parent and children
        if (parent.parent) {
            form_id = parent.parent
            parent = await formModel.findById(form_id).populate("fields")
        }
        const children = await formModel.find({ parent: form_id }).populate("fields").populate("group")

        // if any unsubmitted child, do nothing
        if (children.find(childForm => !childForm.isSubmitted)) {
            console.log('doing nothing')
            return null
        }
        const questions = parent.fields.map(field => field.label)
        
        const groupIds = children.map(childForm => childForm.group)
        const groupDocs = await groupModel.find({ _id: { $in: groupIds } })
        const groupNameMap = groupDocs.reduce((map, group) => ({ ...map, [group._id]: group.name }), {})
        const groups = groupDocs.map(group => group.name)

        const questionMap = {}
        for (const child of children) {
            for (const field of child.fields) {
                questionMap[`${child.group.name}::${field.label}`] = field.value
            }
        }

        // create report
        const report = reportModel.create({
            form: form_id,
            questions,
            groups,
            questionMap
        })
        // mark parent as submitted
        await formModel.findByIdAndUpdate(form_id, { isSubmitted: true })
        return report
    } catch(e) {
        console.error("an error occurred")
        return null
    }
}

module.exports = {
    getReport,
    generateReport
}