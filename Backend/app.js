const express = require("express");
const app = express();
const connectmongo = require("./DatabaseConnection");
connectmongo();
const port = 80;

app.get("/",(req,res)=>{
    res.render("hellio");
});
app.listen(port,()=>
{
    console.log(`the sever is listening ${port}`);
})