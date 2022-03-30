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
        const { form, username } = req.body
        const newForm = await service.createForm(form, username)
        res.send({ form: newForm })
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e, res)
    }
})

router.patch('/fields/:id', idChecker, mongoChecker, async (req, res, next) => {
    try {
        const fields = req.body
        const form = await service.setFields(req.params.id, fields)
        res.send({ form })
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e, res)
    }
})

router.post('/email/:id', idChecker, mongoChecker, async (req, res, next) => {
    try {
        const { sender, targets } = req.body
        const form = await service.sendForm(sender, req.params.id, targets)
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

router.patch('/submit/:id', idChecker, mongoChecker, async (req, res, next) => {
    try {
        const submitted = await service.submitForm(req.params.id)
        res.send({ submitted })
    } catch(e) {
        console.error('an error occurred', e)
        handleError(e, res)
    }
})

module.exports = router