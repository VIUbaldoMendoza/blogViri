const { Router } = require("express");
const { createPost, getPosts, getPostDetail } = require("../controllers/postsController");
const { verifyAdmin } = require("../middlewares/authMiddleware");

const postRouter = Router();

postRouter.post("/", verifyAdmin, createPost);  // Solo administradores pueden crear posts
postRouter.get("/", getPosts);
postRouter.get("/:id", getPostDetail);

module.exports = postRouter;

