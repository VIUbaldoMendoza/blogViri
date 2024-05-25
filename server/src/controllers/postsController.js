const { Post, User } = require("../db");

const createPost = async (req, res) => {
  try {
    const { title, body, userId } = req.body;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const newPost = await Post.create({ title, body, userId });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPostDetail = async (req, res) => {
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
  createPost,
  getPosts,
  getPostDetail,
};
