const express=require("express");
const home=express.Router();

home.get("/",require("./home/home"));

home.get("/article",require("./home/article"));

home.post("/comment",require("./home/comment"));

module.exports=home;