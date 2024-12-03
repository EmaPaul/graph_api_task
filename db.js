const { connect} = require("mongoose");

const connectDB = async () => {
    try{
        await connect(process.env.MONGODB_URI)
        console.log("Conexion exitosa a mongo db")
    }catch(err){
        console.error(err);
    }
}


module.exports = {connectDB}