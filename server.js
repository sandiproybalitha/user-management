const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const boodyparser = require('body-parser');
const path = require('path');
const con = require('./server/database/db'); 


dotenv.config({path:'./config.env'})
const PORT = process.env.PORT || 5000;

//log request
app.use(morgan('tiny'));
//parse json
app.use(express.json())

// connect db 
con();
//parse request to body parser
app.use(boodyparser.urlencoded({extended:true}));
//set view engine
app.set('view engine','ejs');
// app.set('views',path.resolve(__dirname,'views/ejs'))//if ejs is not present at views folder
//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
// load router 
app.use(require('./server/routes/router'));



app.listen(PORT,() => console.log(`server is running at port ${PORT}`));