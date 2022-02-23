const router = require('express').Router()
const service = require('../services/user')

router.get('/:id', async (req, res, next) => {
    try {
        const user = await service.getUser(req.params.id)
        res.send({user})
    } catch (e) {
        console.error('error', e)
        res.send({user: null})
    }
})

router.post('/', async (req, res, next) => {
    let { user } = req.body
    try {
        const user = await service.createUser(user)
        res.send({user})
    } catch (e) {
        console.error('error', e)
        res.send({user: null})
    }
})

module.exports = router