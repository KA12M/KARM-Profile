const mongoose = require("mongoose");

// create Schema
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: "general",
    },
    images: {
      type: [String],
      required: true,
      validate: {
        validator: function (array) {
          return array.length >= 1;
        },
        message: "Must have at least 1 photo.",
      },
    },
    userLikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    timestamps: true,
  }
);

blogSchema.pre("findByIdAndUpdate", function (next) {
  this.update({}, { $set: { updatedAt: new Date() } });
  next();
});   

// create model Blog
const Blog = mongoose.model("blogs", blogSchema);

module.exports = Blog;
