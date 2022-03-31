/*
 * controllers/index aggregates the routes from all controllers 
 */

const router = require('express').Router()

router.use('/user', require('./user'))
router.use('/group', require('./group'))
router.use('/form', require('./form'))
router.use('/field', require('./field'))
router.use('/report', require('./report'))

module.exports = router