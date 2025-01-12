const express=require("express");
const app=express();//it is a function that returns a value and we are storing it in the app variable
let port=8080;//defining port number
const path=require("path")//requiring path package(importing)
app.use(express.static("public"));
app.listen(port,()=>//continuosuly listening to the port number
{
    console.log(`listening to port ${port}`);
});

app.set("viewengine","ejs");
app.set("views",path.join(__dirname,"/Views"));

app.get("/instagramaccount/:accountname",(req,res)=>
{
    let {accountname}=req.params;
    const database=require("./data.json");
    
    const data=database[accountname];//storing here the account name we are passing
    console.log(data);
    res.render("instagram.ejs",
        {data}
    );
});





