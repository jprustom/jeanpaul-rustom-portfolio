const express = require('express')
const path = require('path')
app = express();
app.use(express.static(__dirname + "/../dist"))
app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.resolve(__dirname + "/../dist/index.html"))
})
module.exports = app;