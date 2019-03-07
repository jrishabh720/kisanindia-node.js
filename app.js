var express = require("express");
var app = express();
var body = require('body-parser');
app.use(body.urlencoded({extended : true}));
app.use(express.static("Public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
  res.render("home");
});
app.get("/app",function(req,res){
  res.render("app");
});
app.post("/app",function(req,res){
  console.log(req.body.Subscribe);
  res.redirect("app");
});
app.listen(3000 , function(){
  console.log("Server is Started");
});
