const {User,validateUser}=require("../../model/user");

const bcrypt=require("bcrypt");

module.exports=async (req,res)=>{
    try {
        await validateUser(req.body)
    }catch (e) {
        return res.redirect(`/admin/user-edit?message=${e.message}`);
    }
    let user=await User.findOne({email:req.body.email});
    if(user){
        return res.redirect(`/admin/user-edit?message=邮箱地址已经被占用`);

    }else{
        let salt=await bcrypt.genSalt(10);
        let pass=await bcrypt.hash(req.body.pwd,salt);
        req.body.pwd=pass;
        await User.create(req.body);
        res.redirect("/admin/user");
    }



}