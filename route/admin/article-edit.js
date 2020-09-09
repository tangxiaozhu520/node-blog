const Article=require("../../model/article");
module.exports=async (req,res)=>{
    req.app.locals.currentIndex="文章管理";
    const {id}=req.query;
    if(id){
        let article=await Article.findOne({_id:id});
        res.render("admin/article-edit",{
            article:article,
            link:"/admin/article-modify?id="+id,
            button:"修改"
        });
    }else {
        res.render("admin/article-edit",{
            link:"/admin/article-edit",
            button:"添加"
        });
    }

}