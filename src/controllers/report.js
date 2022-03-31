const router = require('express').Router()
const service = require('../services/report')
const { idChecker, handleError, mongoChecker } = require('./misc')

router.get('/:id', idChecker, mongoChecker, async (req, res, next) => {
    try {
        const report = await service.getReport(req.params.id)
        res.send({report})
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e, res)
    }
})

module.exports = router