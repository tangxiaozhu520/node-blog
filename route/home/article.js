const Article=require("../../model/article");
const Comment=require("../../model/comment");
module.exports=async (req,res)=>{
    const {id}=req.query;
    req.app.locals.currentIndex="首页";
    let article=await Article.findOne({_id:id}).populate("author");
    let comments=await Comment.find({aid:id}).populate("uid");
    res.render("home/article",{
        article:article,
        comments:comments
    });
}