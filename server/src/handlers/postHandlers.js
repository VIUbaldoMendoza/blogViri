const { Post } = require("../db");

const createPostHandler = async (req, res) => {
    try {
        const { title, body } = req.body;
        const newPost = await Post.create({ title, body });
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPostsHandler = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPostDetailHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByPk(id);
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ error: "Post not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createPostHandler,
    getPostsHandler,
    getPostDetailHandler,
};
