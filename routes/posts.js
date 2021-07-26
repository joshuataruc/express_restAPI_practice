const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');

router.get('/', (req, res) => {
    res.send('we are on home');
})
// router.get('/anne', (req, res)=>{
//     res.send('anne');
// })

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

module.exports = router;