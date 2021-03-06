/**
 * miscellaneous functions and middleware for backend dev
 */
const { ObjectId } = require('mongodb')
const { mongoose } = require('../db/db')

/**
 * Checks whether the given error is a mongodb error
 * @param {*} error 
 * @returns True if error is a monngodb error
 */
function isMongoError(error) {
    return (
        typeof error === "object" &&
        error !== null &&
        error.name === "MongoNetworkError"
    )
}

/**
 * Handles an error while responding to a call
 * @param {*} err The error that occurred
 * @param {*} res The response object of the call
 */
function handleError(err, res) {
    if (isMongoError) {
        res.status(500).send("internal server error")
    } else {
        res.status(400).send("bad request")
    }
}

/**
 * Checks that request was sent with a valid ObjectId id
 * @param {*} req The request to check
 * @param {*} res The response object from the call
 * @param {*} next The next function from the call
 */
function idChecker(req, res, next) {
    if (!req.params.id || !ObjectId.isValid(req.params.id)) {
        console.error("invalid id:", req.params.id)
        res.status(400).send("invalid id")
        return false
    }
    next()
}

/**
 * Get an idChecker middleware for id's passed as values other than ':id'
 * @param {*} id_name The name of the id being checked
 * @returns A middleware function similar to idChecker
 */
function customIdChecker(id_name) {
    return (req, res, next) => {
        if (!req.params[id_name] || !ObjectId.isValid(req.params[id_name])) {
            console.error("invalid id:", req.params[id_name])
            res.status(400).send("invalid id")
            return false
        }
        next()
    }
}

/**
 * Checks that the connection to mongodb is active
 * @param {*} req The request object from the call
 * @param {*} res The response object from the call
 * @param {*} next The next function from the call
 */
function mongoChecker(req, res, next) {
    if (mongoose.connection.readyState !== 1) {
        console.error("Issue with mongoose connection")
        res.status(500).send("internal server error")
        return false
    }
    next()
}

module.exports = {
    isMongoError,
    handleError,
    idChecker,
    mongoChecker,
    customIdChecker
}