const mongoose = require('mongoose')
const url = 'mongodb+srv://m001-student:root@sandbox.tfgj53t.mongodb.net/website'
mongoose.connect(url)
    .then(() => {console.log("Connected")})

