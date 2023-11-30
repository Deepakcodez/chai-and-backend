const mongoose = require('mongoose')
const uri = 'mongodb://127.0.0.1:27017/loginReg'

connectDB()
.catch(err=>console.log('>>>>>>>>>>> problem in DB connection', err))
async function connectDB(){
    await mongoose.connect(uri);
    console.log('>>>>>>>>>>> db connected')
}

module.exports = connectDB;