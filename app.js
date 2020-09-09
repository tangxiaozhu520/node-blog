const express=require("express");

const path=require("path");

const bodyParser=require("body-parser");
const session=require("express-session");
const dateFormat=require("dateformat");
const template=require("art-template");
require("./model/connect");
const app=express();

template.defaults.imports.dateFormat=dateFormat;

app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
	secret: 'secret key',
	saveUninitialized: false,
	cookie: {
		maxAge: 24 * 60 * 60 * 1000
	},
    resave:false
}));

const admin=require("./route/admin");
const home=require("./route/home");
app.engine("art",require("express-art-template"));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","art");

app.use(express.static(path.join(__dirname,"public")));

app.use("/admin",require("./route/admin/loginHandle"));

app.use("/admin",admin);

app.use("/home",home);

app.listen(80);
console.log("服务器启动成功!");
