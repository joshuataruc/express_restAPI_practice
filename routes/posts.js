const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');


// gets all the post from db
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch{
        res.json({message : err })
    }
});
// router.get('/anne', (req, res)=>{
//     res.send('anne');
// })

// insert a post 
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        // show the savedPost content
        res.json(savedPost);
    }
    catch (err) {
        //shows error
        res.json({ message: err })
    }

});

// specific post by id
router.get('/:id', async (req, res) => {
    try{
        const specificPost = await Post.findById(req.params.id);
        res.json(specificPost)
    }catch(err){
        res.json({message : err })
    }
});

// delete post by id
router.delete('/:id', async (req, res) => {
    try{
        // the _id is from the post model and the req.params.id was from the request object the req.params.id here is from the url
        const deleteById = await Post.remove({_id : req.params.id});
        res.json('Data was deleted');
    }catch(err){
        res.json({message : err })
    }
});

// update data
router.patch('/:id', async(req, res)=>{
    try{
    const UpdateData = await Post.updateOne(
    {_id : req.params.id}, 
    {$set : {title: req.body.title}}
    );
    res.json(UpdateData);
    }catch(err){
        res.json({message : err})
    }
})

module.exports = router;