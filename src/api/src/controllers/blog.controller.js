const Blogs = require("../models/blogs.model");
const factory = require("./handlerFactory");

module.exports.getBlogs = factory.getAll(Blogs);
module.exports.getOneBlog = factory.getOne(Blogs);
module.exports.createBlog = factory.createOne(Blogs);
module.exports.updateBlog = factory.updateOne(Blogs);
module.exports.deleteBlog = factory.deleteOne(Blogs);
