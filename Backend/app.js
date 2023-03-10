const express = require ('express');
const app = express ();
const connectmongo = require ('./DbConnection');
connectmongo();
const port = 80;
app.use(express.json());
//app.use('/api/auth',require('./routes/auth'))
app.listen(port,()=>{console.log('You are connected',port)})