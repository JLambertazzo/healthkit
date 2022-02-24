const router = require('express').Router()
const service = require('../services/field')
const { idChecker, mongoChecker, handleError } = require('./misc')

router.get('/:id', idChecker, mongoChecker, (req, res, next) => {
    try {
        const field = await service.getField(req.params.id)
        res.send({ field })
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e, res)
    }
})

router.post('/:id', idChecker, mongoChecker, (req, res, next) => {
    try {
        const { field } = req.body
        const form = await service.createField(req.params.id, field)
        res.send({ form })
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e, res)
    }
})

module.exports = router