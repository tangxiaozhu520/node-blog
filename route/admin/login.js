const bcrypt = require("bcrypt");
const { User } = require("../../model/user.js");
module.exports = async(req, res) => {
    const { email, pwd } = req.body;
    req.app.locals.currentIndex = "登录";
    if (email.trim().length == 0 || pwd.trim().length == 0) {
        res.status(400).render("admin/error", {
            msg: "邮箱地址或者密码错误"
        });
    }
    let user = await User.findOne({ email: email });
    if (user) {
        let flag = await bcrypt.compare(pwd, user.pwd);
        if (flag) {
            req.session.name = user.name;
            req.session.role = user.role;
            req.app.locals.userinfo = user;
            if (user.role == "admin") {
                res.redirect("/admin/user");
            } else {
                res.redirect("/home");
            }

        } else {
            res.status(400).render("admin/error", {
                msg: "邮箱地址或者密码错误"
            })
        }
    } else {
        res.status(400).render("admin/error", {
            msg: "邮箱地址或者密码错误"
        })
    }
}