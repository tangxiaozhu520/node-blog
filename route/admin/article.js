const Article=require("../../model/article");

const pagination=require("mongoose-sex-page");

module.exports=async (req,res)=>{
    req.app.locals.currentIndex="文章管理";
    const page=req.query.page || 1;
    let articles=await pagination(Article).find().page(page).size(4).display(4).populate('author').exec();

    res.render("admin/article",{
        articles:articles
    });
}