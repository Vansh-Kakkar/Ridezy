const mongoose = require('mongoose');
const DB_NAME= require('../constants.js')


const  connectToDb = async()=> {
       try {
        const connectedInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n database connected !! DB Host: ${connectedInstance.connection.host}`)
       } catch (error) {
          console.error("error",error)
          process.exit(1);
       }
}



    module.exports = connectToDb;