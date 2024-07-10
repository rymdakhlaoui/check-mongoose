// require mongoose
const mongoose = require('mongoose');


// connect function
const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("Connected to DB successfully !")
    } catch (error) {
        console.log(error)
    }
}
//export module
module.exports = connect