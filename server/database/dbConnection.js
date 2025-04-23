
const mongoose=require('mongoose')
const connectionString=process.env.MONGODBCONNECTIONSTRING 

//and to connect mongodb with node

mongoose.connect(connectionString).then(()=>{
    console.log("successfully connected to mongodb Atlas");
}).catch((err)=>{
    console.log("Mongo Db connection failed")
    console.log(err);
    ;
    
})