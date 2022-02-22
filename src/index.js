/**
 * 3 layer backend structure
 * This file runs the backend server, passes off api requests to structure
 * >Controller Layer: endpoints for api requests, handles directing calls
 * >Service Layer: logic layer, call repositories as needed and create response for controller
 * >Repository Layer: all communication with database should happen here
 * Split each layer into files for data type (user, form, etc.)
 */
const express = require('express')
const path = require('path')
const apiRouter = require('./controllers')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "../client/build")))

app.use('/api', apiRouter)

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`listening on ${port}`)
})