/*
 * controllers/index aggregates the routes from all controllers 
 */

const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.send("Base route for controllers")
})

router.use('/user', require('./user'))

module.exports = router