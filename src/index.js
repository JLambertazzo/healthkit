/**
 * 3 layer backend structure
 * This file runs the backend server, passes off api requests to structure
 * >Controller Layer: endpoints for api requests, handles directing calls
 * >Service Layer: logic layer, call repositories as needed and create response for controller
 * >Repository Layer: all communication with database should happen here
 * Repository layer is implemented in mongoose models
 * Split each layer into files for data type (user, form, etc.)
 */
require('dotenv').config()
const express = require('express')
const path = require('path')
const apiRouter = require('./controllers')
const { mongoChecker } = require('./controllers/misc')
const app = express()
const { mongoose } = require("./db/db")
const session = require('express-session')
const MongoStore = require('connect-mongo')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "../client/build")))

app.use(
    session({
        secret: "secret secrets",
        resave: false,
        saveUninitialized: false,
        cookie: {
        expires: 36000000,
        sameSite: "strict",
        httpOnly: true,
        },
        store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
        unset: "destroy",
    })
);

app.get('/session/loggedin', mongoChecker, (req, res, next) => {
    if (!req.session || !req.session.username) {
        res.send({ username: null })
    } else {
        res.send({ username: req.session.username })
    }
})

app.get("/session/logout", (req, res) => {
    if (req.session) {
      req.session.destroy((err) => {
          if (err) {
              console.error(err)
          }
      });
    }
    res.status(301).redirect("/");
});

app.use('/api', apiRouter)

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`listening on ${port}`)
})