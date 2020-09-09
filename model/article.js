const mongoose=require("mongoose");
const articleSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"请填写文章标题"],
        maxlength:20,
        minlength:4
    },
    author:{
        type:mongoose.Schema.Types.ObjectID,
        ref:"User",
        required: true
    },
    publishDate:{
        type:Date,
        default:Date.now
    },
    cover:{
        type:String,
        default: null
    },
    content:{
        type:String
    }

});
const Article=mongoose.model("Article",articleSchema);
module.exports=Article;