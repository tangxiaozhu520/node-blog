module.exports = (req, res) => {
    req.session.destroy(function() {
        res.clearCookie("connect.sid");
        req.app.locals.userinfo = null;
        res.redirect("/admin/login");
    })

}