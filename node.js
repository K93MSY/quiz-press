const express = require('express')
const app = express()
app.use(express.static('press'))
app.listen(8000, () => console.log('Listening on port 8000...'))