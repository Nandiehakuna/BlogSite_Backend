const express = require('express');
const cors =require('cors')
const {connect} = require('mongoose')
require('dotenv').config();
const UserRouter =require('./Router/UserRouter');
const PostsRouter =require('./Router/PostsRouter');
const { notFound, errorMiddleware } = require('./middlewares/ErrorMiddleware');





const app =express();

const PORT = process.env.PORT || 5555;

app.use(express.json({extended:true}))
app.use(express.urlencoded({extended: true}))
app.use(cors({credentials: true}))

app.use('/api/user', UserRouter);
app.use('/api/posts', PostsRouter);
app.use(notFound)
app.use(errorMiddleware)

const startServer =async()=>{
    try{
        await connect(process.env.MONGO_URI )
            console.log("mongo is running......");
            app.listen(PORT, ()=>console.log(`server has started on port ${PORT}`))
    }catch(error){
        console.log("mongo connection error", error)
        process.exit(1)

    }
}

startServer()

module.exports=app
















