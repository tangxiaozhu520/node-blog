const {User,validateUser}=require("../../model/user");
const bcrypt=require("bcrypt");
module.exports=async (req,res)=>{
    const {pwd}=req.body;
    const {id}=req.query;
    let user=await User.findOne({_id:id});

    if(bcrypt.compare(pwd,user.pwd)){
        try{
            await validateUser(req.body);
        }catch (e) {
             return res.redirect(`/admin/user-edit?message=${e.message}&&id=${id}`)

        }

        await User.updateOne({_id:id},{
        name:req.body.name,
        email:req.body.email,
        role:req.body.role,
        state:req.body.state });
        res.redirect("/admin/user");

    }else{
        res.redirect(`/admin/user-edit?message="密码比对失败，不能修用户信息"&& id=${id}`);

    }

}