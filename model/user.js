const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const Joi=require("joi");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        maxlength:20,
        minlength:2,
        required:true,
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    pwd:{
        type:String,
        required:true,

    },
    role:{
        type:String,
        required:true
    },
    state:{
        type:String,
        defaul:0
    }


})
const User=mongoose.model("User",userSchema);

// User.create({
//     name: "tangxiaozhu",
//     email: "1234561595@qq.com",
//     pwd:"123456",
//     role:"admin",
//     state:"启用"
// //
//
// })
// async function createUser(){
//     let salt=await bcrypt.genSalt(10);
//     let pass=await bcrypt.hash("123456",salt);
//     let user=await User.create({
//         name: "tangxiaozhu",
//         email: "1234561595@qq.com",
//         pwd:pass,
//         role:"admin",
//         state:0
//     });
//
// }
// createUser();
const validateUser=(user)=>{
    const schema={
        name:Joi.string().min(2).max(20).required().error(new Error("用户名不符合验证规则")),
        email:Joi.string().email().required().error(new Error("邮箱地址不符合验证规则")),
        pwd:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
        role:Joi.string().required().valid("normal","admin").error(new Error("角色值非法")),
        state:Joi.number().required().valid("0","1").error(new Error("状态值非法"))
    }
    return Joi.validate(user,schema);
}
module.exports={
    User,
    validateUser
}