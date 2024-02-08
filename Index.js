const express=require("express");
const app=express();
const path=require("path");

let port=1000;

app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const Instadata=require("./data.json");
    const data=Instadata[username];
    res.render("Instagram.ejs",{data});
})

app.listen(port,()=>{
    console.log("App is listening");
})
