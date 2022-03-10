const router = require('express').Router()
const service = require('../services/user')
const { idChecker, handleError, mongoChecker } = require ('./misc')


router.post('/', mongoChecker, async (req, res, next) => {
    let user = {username: req.body.username, email: req.body.email, password: req.body.password, name: req.body.name};
    if (req.body.group) {
        user.group = req.body.group
    }
    try {
        const newUser = await service.createUser(user)
        res.send({user: newUser})
    } catch(e) {
        console.error('error', e)
        handleError(e, res)
    }
})

router.delete('/:id', idChecker, mongoChecker, async (req, res, next) => {
    try {
        const user = await service.deleteUser(req.params.id)
        res.send({user})
    } catch(e) {
        console.error('error', e)
        handleError(e, res)
    }
})

router.post('/login', mongoChecker, async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await service.login(email, password)
        if (user) {
            req.session.username = user.username
            res.status(200);
            res.send({user})
        }
        else{
            res.status(400);
            res.send({user: null})
        }
    } catch(e) {
        console.error('error', e)
        handleError(e, res)
    }
})

router.get('/current', mongoChecker, async (req, res, next) => {
    const populated = +req.query.populated || false
    console.log('pourquoiiii', req.query, populated)
    try {
        if (!req.session || !req.session.username) {
            res.send({ user: null })
        } else {
            const user = await service.getByUsername(req.session.username, populated > 0)
            res.send({ user })
        }
    } catch(e) {
        console.error('error', e)
        handleError(e, res)
    }
})

// FOR TESTING PURPOSES, DELETE THIS ONCE LOGIN COMPLETE -Julien
router.get('/force/:username', mongoChecker, async (req, res, next) => {
    req.session.username = req.params.username
    res.send({ message: `logged you in as ${req.params.username}` })
})

// routes like these need to be at the bottom, :id and current conflict
router.get('/:id', idChecker, mongoChecker, async (req, res, next) => {
    try {
        const user = await service.getUser(req.params.id)
        res.send({user})
    } catch(e) {
        console.error('error', e)
        handleError(e, res)
    }
})


module.exports = router
