const express = require("express");
const fs = require('fs');

const app = express();

app.get("/",function(req,res){
	res.sendFile('basicForm.html', {root: __dirname })
})

app.post("/",function(req,res){
	res.send("Form Submitted successfully");
})

const port=process.env.PORT || 3000
app.listen(port,function()
{
	console.log(`Example app listening at http://localhost:${port}`)
});