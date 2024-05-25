const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/mainRouter");
const authRouter = require("./routes/authRouter")

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(authRouter);
app.use(mainRouter);

module.exports = app;
