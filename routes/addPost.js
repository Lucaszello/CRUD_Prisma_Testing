const express = require("express");
const { addPost, renderAddPost } = require("../controller/post");
const addRouter = express.Router();

addRouter.get("/addPost",addPost)

addRouter.post("/", renderAddPost)

module.exports = addRouter