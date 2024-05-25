const { Router } = require("express");
const postRouter = require("./postRouter");
const usersRouter = require("./usersRouter");


const mainRouter = Router();
mainRouter.use("/users", usersRouter);
mainRouter.use("/posts", postRouter);

module.exports = mainRouter;
