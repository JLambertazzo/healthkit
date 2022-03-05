const router = require('express').Router()
const service = require('../services/form')
const { idChecker, handleError, mongoChecker, customIdChecker } = require('./misc')

router.get('/:id', idChecker, mongoChecker, async (req, res, next) => {
    try {
        const form = await service.getForm(req.params.id)
        res.send({ form })
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e, res)
    }
})

router.post('/', mongoChecker, async (req, res, next) => {
    try {
        const { form } = req.body
        const newForm = await service.createForm(form)
        res.send({ form: newForm })
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e, res)
    }
})

router.patch('/fields/:id', idChecker, mongoChecker, async (req, res, next) => {
    try {
        const { fields } = req.body
        const form = await service.setFields(req.params.id, fields)
        res.send({ form })
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e, res)
    }
})

router.post('/email/:id', idChecker, mongoChecker, async (req, res, next) => {
    try {
        const { emails } = req.body
        const form = await service.sendByEmails(req.params.id, emails)
        res.send({ form })
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e, res)
    }
})

router.delete('/:id', idChecker, mongoChecker, async (req, res, next) => {
    try {
        const form = await service.deleteForm(req.params.id)
        res.send({ form })
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e, res)
    }
})

// might not be necessary?? could be replaced by a good call to set fields
router.delete('/:id/field/:field_id', idChecker, customIdChecker('field_id'), mongoChecker, async (req, res, next) => {
    try {
        const field = await service.removeField()
        res.send({ field })
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e, res)
    }
})

module.exports = router