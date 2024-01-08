const userSchema = require('./Mongoose/userSchema')
require('./Mongoose/dbConfig')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())     // to avoid fetch error on cors at frontend whenever API is called
app.use(express.json())
app.post('/user',async (req, res) => {
    let user = new userSchema(req.body)
    const result = await user.save()    //syntax to insert data in a collection
    res.send(result)
}).listen(4000)
