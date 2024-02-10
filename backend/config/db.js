const mongoose = require('mongoose');


const connectDB = async ()=>{
try{
const conn = await mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true,

});
console.log(`MongoDB Connected:${conn.connection.host}`);
}
catch(error){
    console.log(error.message);
    process.exit();
}
}

module.exports = connectDB;