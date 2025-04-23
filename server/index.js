require('dotenv').config() 

require('./database/dbConnection')
const router=require('./routes/userRouter')

const express=require('express') 


const cors=require('cors')



//create an server

const pfServer=express() 

pfServer.use((cors())) 

pfServer.use((express.json())) 


// pfServer.use('/uploads',express.static('./uploads'))

pfServer.use(router)

const PORT=3000 ||process.env.PORT 


pfServer.listen(PORT,()=>{
    console.log(`server running successfully in  ${PORT} and waiting for client reuqest`);
    
}) 