const Comment=require("../../model/comment");

module.exports=async (req,res)=>{
    let {uid,aid,content}=req.body;
    await Comment.create({
        uid:uid,
        aid:aid,
        content:content,
        time:Date.now()
    });
    res.redirect("/home/article?id="+aid);



}