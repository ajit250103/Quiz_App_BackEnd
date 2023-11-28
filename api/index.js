const mongoose= require("mongoose");
const express= require("express");
const bodyParser = require("body-parser");
const cors=require("cors");
const quiz = require("../controller/quiz");
mongoose.set("strictQuery",true);
// mongoose.connect("mongodb+srv://thavaneshr:12345@cluster0.odxpuvt.mongodb.net/quizappdb");
mongoose.connect("mongodb+srv://ajitpal2501:2501MongoDB@cluster0.yafmn3p.mongodb.net/?retryWrites=true&w=majority");
var db=mongoose.connection;
db.on("open",()=>console.log("connected to db"));
db.off("error",()=>console.log("error occured"));
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/", (req, res) => {
    res.send("Backend is running");
});
app.use("/quiz",quiz);
app.listen(4000,()=>{console.log("Server Started at 4000")});