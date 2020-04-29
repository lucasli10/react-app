const express = require('express');
// const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose')
const port = process.env.PORT ||80;



require('dotenv').config()

const app = express();


app.use(cors());

app.use(express.json());




const uri ="mongodb+srv://lucas:HappyBu0501@cluster0-zsfwi.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true})



const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("mongodb connected successfully")
})



const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/user');
app.use('/exercises',exerciseRouter);
app.use('/users',userRouter)


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})