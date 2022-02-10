const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
    res.send("Hello, world!");
})

const port = 5000;
app.listen(port, () => {
    console.log(`listening on ${port}`)
})