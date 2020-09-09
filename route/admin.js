const express=require("express");
const admin=express.Router();
const bcrypt=require("bcrypt");
const {User}=require("../model/user.js");
admin.get("/login",(req,res)=>{
    res.render("admin/login");
})
admin.post("/login",require("./admin/login"));

admin.get("/user",require("./admin/userPage"));

admin.get("/user-edit",require("./admin/user-edit"));

admin.post("/user-edit",require("./admin/user-edit-fn"));

admin.post("/user-modify",require("./admin/user-modify"));

admin.get("/delete",require("./admin/user-delete"));

admin.get("/article",require("./admin/article"));

admin.get("/article-edit",require("./admin/article-edit"));

admin.post("/article-edit",require("./admin/article-add"));

admin.post("/article-modify",require("./admin/article-modify"));

admin.get("/logout",require("./admin/logout"));

module.exports=admin;