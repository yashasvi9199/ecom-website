const userSchema = require('./Mongoose/userSchema')
require('./Mongoose/dbConfig')
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 4000

app.use(cors())     // to avoid fetch error on cors at frontend whenever API is called
app.use(express.json())
app.post('/user',async (req, res) => {
    let user = new userSchema(req.body)
    const result = await user.save()    //syntax to insert data in a collection
    res.send(result)
})

app.post('/login', async (req, res) => {
    console.log("Login Request Received")
    try {
        let {id,password} = req.body
        let result = await userSchema.findOne({
            $or: [
                {userID: id},
                {email: id}
            ],
            password: password
        })
        if(result){
            res.send({status: 200, success:true, message: 'User successfully logged in'})
            // res.send(result)
            // console.log(result)
        }else {
            res.send({status: 401, success: false, message: 'Invalid User ID or password'})
            // console.log("Incorrect credentials")
        }
    } catch (error) {
        res.status(500).json({status: 500, success:false, message: 'Error Checking data'})
        // console.log("ERROR DB")
    }
})


app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})
