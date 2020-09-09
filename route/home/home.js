const Article=require("../../model/article");
const pagination=require("mongoose-sex-page");

module.exports=async (req,res)=>{
    req.app.locals.currentIndex="首页";
    let {page}=req.query||1;
    let results=await pagination(Article).find().page(page).size(6).display(4).populate("author").exec();
    res.render("home/default",{
        results:results
    });
}