const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.send("Base route for controllers")
})

module.exports = router