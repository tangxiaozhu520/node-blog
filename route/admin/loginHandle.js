
module.exports=(req,res,next)=>{
    // console.log(req.url);
    if(req.url!="/login" && !req.session.name){
        res.redirect("/admin/login");
    }else {
        if(req.session.role=="normal"){
            return res.redirect("/home/");
        }
        next();

    }
}