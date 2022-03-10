const router = require('express').Router()
const service = require('../services/group')
const { idChecker, handleError, mongoChecker, groupIdChecker, customIdChecker } = require('./misc')

router.get('/:id', idChecker, mongoChecker, async (req, res, next) => {
    try {
        const group = await service.getGroup(req.params.id)
        res.send({group})
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e, res)
    }
})

router.get('/', mongoChecker, async (req, res, next) => {
    try {
        const groups = await service.getAll()
        res.send({ groups })
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e, res)
    }
})

router.post('/', mongoChecker, async (req, res, next) => {
    try {
        const { group } = req.body
        const newGroup = await service.createGroup(group)
        res.send({ group: newGroup })
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e)
    }
})

router.patch('/add/:group_id/:id', customIdChecker('group_id'), idChecker, mongoChecker, async (req, res, next) => {
    try {
        const { user, group } = await service.addUser(req.params.group_id, req.params.id)
        res.send({ user, group })
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e)
    }
})

router.delete('/:id', idChecker, mongoChecker, async (req, res, next) => {
    try {
        const group = await service.deleteGroup(req.params.id)
        res.send({ group })
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e)
    }
})

module.exports = router