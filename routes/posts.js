var express = require('express');
var router = express.Router();
var Post=require('../model/Post');
// var User=require('../model/User');
router.get('/postadd',function(req,res){
  res.render('posts/post_add');
})

//@route POST routes/posts
//@desc Add POST
//@access Public
router.post('/postadd',function(req,res,next){
  // res.send("cena");
  var pos=new Post();
  pos.title=req.body.title;
  pos.content=req.body.content;
  pos.image_url=req.body.image_url;
  pos.created_at=req.body.created_at;
  pos.updated_at=req.body.updated_at;
  pos.star_count=req.body.star_count;
  pos.category_type=req.body.category_type;

  pos.save(function(err,rtn){
    if(err) throw err;
    console.log(rtn);
    res.redirect('/');

  });
});

//@route GET routes/posts
//@desc GET all post
//@access Public
router.get('/postlist',function(req,res,next){
  Post.find(function(err,rtn){
    if(err) throw err;
    console.log(rtn);
  res.render('posts/post_list',{posting:rtn});
  })
})
//@route GET routes/posts/:id
//@desc Get a post
//@access Public
router.get('/postdetail/:id',function(req,res,next){
  Post.findById(req.params.id,function(err,rtn){
    if(err) throw err;
    console.log(rtn);
    res.render('posts/post_detail',{postDetail:rtn});
  })
})

//@route DELETE routes/posts/:id
//@desc DELETE a post
//@access Public
router.get('/postdelete/:delId',function(req,res,next){
  Post.findByIdAndRemove(req.params.delId,function(err,rtn){
    if(err) throw err;
    console.log(rtn);
    res.redirect('/posts/postlist');
  });
});
//@route POST routes/posts
//@desc Add POST
//@access Public
router.get('/postupdate/:UpId',function(req,res,next){

  Post.findById(req.params.UpId,function(err,rtn){
    if(err) throw err;
      res.render('posts/post_update',{postupd:rtn});
  });
});

router.post('/postupdate/:id',function(req,res,next){
  var update={
    category_type:req.body.category_type,
    title:req.body.title,
    content:req.body.content,
    image_url:req.body.image_url
  }
  Post.findByIdAndUpdate(req.params.id,{$set:update},function(err,rtn){
    if(err) throw err;
    res.redirect('/posts/postlist');
  })
})

router.get('/category/:type',function(req,res,next){

  Post.find({category_type:req.params.type},function(err,rtn){
    if(err) throw err;
    console.log(rtn);
    res.render('index',{cat:rtn});

  })

})

//@route POST routes/posts
//@desc Add POST
//@access Public
// router.post('/postadd',function(req,res){
//   var pos=new Post();
//     pos.title=req.body.title;
//     pos.content=req.body.content;
//     pos.image_url=req.body.image_url;
//     pos.created_at=req.body.created_at;
//     pos.updated_at=req.body.updated_at;
//     pos.star_count=req.body.star_count;
//
//   pos.save(function(err,rtn){
//     if(err){
//       res.status(500).json({
//         message:"Internal Server Error",
//         error:err
//       })
//     }else {
//       res.status(201).json({
//         message:"Post  Created",
//         posts:rtn
//
//       })
//     }
//   })
// })

//@route GET routes/posts
//@desc GET all post
//@access Public

// router.get('/list',function(req,res){
//   Post.find(function(err,rtn){
//     if(err){
//       res.status(500).json({
//         message:"Internal Server Error",
//         error:err
//       })
//     }else {
//       res.status(201).json({
//         posts:rtn
//       })
//     }
//   })
//
// })

//@route GET routes/posts/:id
//@desc Get a post
//@access Public
// router.get('/:id',function(req,res){
//   Post.findById(req.params.id,function(err,rtn){
//     if(err){
//       res.status(500).json({
//         message:"Internal Server Error",
//         error:err
//       })
//     }else {
//       res.status(201).json({
//         posts:rtn
//       })
//     }
//   })
// })
//@route DELETE routes/posts/:id
//@desc DELETE a post
//@access Public
// router.delete('/:id',function(req,res){
//   Post.findByIdAndRemove(req.params.id,function(err,rtn){
//     if(err){
//       res.status(500).json({
//         message:"Internal Server Error",
//         error:err
//
//       })
//     }else {
//       res.status(200).json({
//         message:"Post Deleted"
//       })
//     }
//   })
// })
//

  module.exports=router;
