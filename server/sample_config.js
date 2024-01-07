const mongoose = require('mongoose')
const url = 'mongodb+srv://m001-student:root@sandbox.tfgj53t.mongodb.net/website'
//url is connection string from atlas> connect <url with changed password>/DB name
//Make sure that there are no special characters in password or DB name else that will end in buffer error
const db = async () => {
    mongoose.connect(url)
    const schema = new mongoose.Schema({})
    const data = mongoose.model('users',schema)
    const result = await data.find()
    console.log(result)
}

db()