const router = require('express').Router()
const service = require('../services/user')
const { idChecker, handleError, mongoChecker } = require ('./misc')

router.get('/:id', idChecker, mongoChecker, async (req, res, next) => {
    try {
        const user = await service.getUser(req.params.id)
        res.send({user})
    } catch (e) {
        console.error('error', e)
        handleError(e, res)
    }
})

router.post('/', mongoChecker, async (req, res, next) => {
    let { user } = req.body
    try {
        const user = await service.createUser(user)
        res.send({user})
    } catch (e) {
        console.error('error', e)
        handleError(e, res)
    }
})

module.exports = router