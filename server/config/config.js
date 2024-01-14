const mongoose = require('mongoose')
const url = 'mongodb+srv://m001-student:root@sandbox.tfgj53t.mongodb.net/website'
mongoose.connect(url,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {console.log("Connected")})
  .catch((error) => {console.log("ERROR CONNECTING DATABSE ==> ", error)})