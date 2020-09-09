const {User}=require("../../model/user");

module.exports=async (req,res)=>{
    req.app.locals.currentIndex="用户管理";
    let count=await User.find({});
    let page=req.query.page || 1;
    let pageSize=5;
    let total=Math.ceil(count.length/ pageSize);
    let users=await User.find({}).limit(pageSize).skip((page-1)*pageSize);

    res.render("admin/user",{
        users:users,
        total:total,
        page:page
    });
    // // 接收客户端传递过来的当前页参数
	// let page = req.query.page || 1;
	// // 每一页显示的数据条数
	// let pagesize = 5;
	// // 查询用户数据的总数
	// // let count = await User.countDocuments({});
	// let count=await User.find({});
	// // 总页数
	// let total = Math.ceil(count.length/ pagesize);
    //
	// // 页码对应的数据查询开始位置
	// let start = (page - 1) * pagesize;
    //
	// // 将用户信息从数据库中查询出来
	// let users = await User.find({}).limit(pagesize).skip(start)
	// // 渲染用户列表模块
	// res.render('admin/user', {
	// 	users: users,
	// 	page: page,
	// 	total: total
	// });


}
