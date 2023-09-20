const express = require("express");
const blogsController = require("../controllers/blog.controller");

const router = express.Router();

router
  .route("/")
  .get(blogsController.getBlogs)
  .post(blogsController.createBlog);

router
  .route("/:id")
  .get(blogsController.getOneBlog)
  .patch(blogsController.updateBlog)
  .delete(blogsController.deleteBlog);

module.exports = router;
