var mongoose=require ('mongoose');
var Schema=mongoose.Schema;
var PostSchema=new Schema({
  title:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  },
  image_url:{
    type:String,
    required:true
  },
  created_at:{
    type:Date,
    default:Date.now
  },
  updated_at:{
    type:Date,
    default:Date.now
  },
  star_count:{
    type:Number,
    default:0

  },
  category_type:{
    type:String,
    required:true
  }


});
module.exports=mongoose.model('Posts',PostSchema);
