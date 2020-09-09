const mongoose=require("mongoose");
const commentSchema=new mongoose.Schema({
    uid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    aid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Article"
    },
    time:{
        type:Date
    },
    content:{
        type:String
    }

});
const Comment=mongoose.model("Comment",commentSchema);
module.exports=Comment;