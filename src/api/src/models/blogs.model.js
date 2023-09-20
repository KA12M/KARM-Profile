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
  },
  {
    timestamps: true,
  }
);

blogSchema.pre('findByIdAndUpdate', function (next) {
  this.update({}, { $set: { updatedAt: new Date() } });
  next();
});

// create model Blog
const Blog = mongoose.model("blogs", blogSchema);

module.exports = Blog;
