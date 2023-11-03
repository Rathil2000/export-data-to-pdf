const fs = require('fs');
const pdf = require('html-pdf');
const json2html = require ('json2html');
const express = require('express');
const app =express();
const userController=  require("./controllers/userController")

app.listen(4000, function(){
    console.log("express is online");
});


app.get('/data',userController.getAllUsers)

