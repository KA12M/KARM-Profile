const Blogs = require("../models/blogs.model");
const User = require("../models/user.model");
const { generateCookieId } = require("../utils/generate");
const factory = require("./handlerFactory");

module.exports.getBlogs = factory.getAll(Blogs);
module.exports.getOneBlog = factory.getOne(Blogs);
module.exports.createBlog = factory.createOne(Blogs);
module.exports.updateBlog = factory.updateOne(Blogs);
module.exports.deleteBlog = factory.deleteOne(Blogs);

module.exports.likeBlog = async (req, res) => {
  let cookieId = req.cookies.cookieId;
  const { id } = req.params;

  if (!cookieId) {
    cookieId = generateCookieId();
    res.cookie("cookieId", cookieId);
  }

  try {
    var result = await like(cookieId, id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const like = async function (cookieId, blogId) {
  let user = await User.findOne({ userName: cookieId });

  if (!user) {
    user = await User.create({ userName: cookieId });
  }

  const blog = await Blogs.findOne({ _id: blogId });

  const isUserLiked = blog.userLikes.includes(user._id);

  const updateQuery = isUserLiked
    ? { $pull: { userLikes: user._id } }
    : { $addToSet: { userLikes: user._id } };

  const updatedBlog = await Blogs.findOneAndUpdate(
    { _id: blogId },
    updateQuery,
    { new: true }
  );

  return {
    isLiked: updatedBlog.userLikes.includes(user._id),
    userLikes: updatedBlog.userLikes,
  };
};
