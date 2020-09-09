const {User}=require("../../model/user");

module.exports=async (req,res)=>{
    const {message,id}=req.query;
    req.app.locals.currentIndex="用户管理";
    // 修改操作
    if(id){
        let user=await User.findOne({_id:id});
        res.render("admin/user-edit",{
            message:message,
            user:user,
            button:"修改",
            link:"/admin/user-modify?id="+id
        })
    }else{
        res.render("admin/user-edit",{
            message:message,
            button: "添加",
            link:"/admin/user-edit"
       });
    }

}