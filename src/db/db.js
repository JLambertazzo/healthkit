const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/teambch")
    .then(() => console.log('mongoose connected'))
    .catch(() => console.error('error connecting mongoose'))
module.exports = { mongoose }