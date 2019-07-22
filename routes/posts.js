const router = require('express').Router();
const Post = require('../models/post');
//GET DATA
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
        console.log(req.body);
    } catch (error) {
        res.json({ message: error })
    }
})
//ADD DATA
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({ message: error })
    }
    console.log(req.body);
});
//GET DATA ID
router.get('/:postID', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        res.json(post);
    } catch (error) {
        res.json({ message: error })
    }
});
//DELETE POST
router.delete('/:postID', async (req, res) => {
    try {
        const deletePost = await Post.remove({ _id: req.params.postID });
        res.json(deletePost);
    } catch (error) {
        res.json({ message: error })
    }
});
// ??UPDATE
router.patch('/:postID', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            { _id: req.params.postID },
            { $set: { title: req.body.title, description: req.body.description } }
        );

        res.json(updatePost);

    } catch (error) {
        res.json({ message: error })
    }
});
module.exports = router;