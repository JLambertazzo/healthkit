/*
 * controllers/index aggregates the routes from all controllers 
 */

const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.send("Base route for controllers")
})

router.use('/user', require('./user'))
router.use('/group', require('./group'))
router.use('/form', require('./form'))
router.use('/field', require('./field'))

module.exports = router