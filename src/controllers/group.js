const router = require('express').Router()
const service = require('../services/group')
const { idChecker, handleError, mongoChecker } = require('./misc')

router.get('/:id', idChecker, mongoChecker, async (req, res, next) => {
    try {
        const group = await service.getGroup(req.params.id)
        res.send({group})
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e, res)
    }
})

router.post('/', mongoChecker, async (req, res, next) => {
    try {
        const { group } = req.body
        const newGroup = await service.createGroup(group)
        res.send({ group })
    } catch (e) {
        console.error('an error occurred', e)
        handleError(e)
    }
})

router.patch('/add/:id', idChecker, mongoChecker, async (req, res, next) => {
    try {
        const group = await service.addUser(req.params.id)
        res.send({ group })
    } catch (e) {
        console.error('an error occurred', e)
        handleError(e)
    }
})

module.exports = router