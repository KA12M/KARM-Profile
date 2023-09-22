const mongoose = require("mongoose");

// create Schema
const technologySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subTItle: String,
    link: String,
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

technologySchema.pre("findByIdAndUpdate", function (next) {
  this.update({}, { $set: { updatedAt: new Date() } });
  next();
});

// create model Blog
const Technology = mongoose.model("technologies", technologySchema);

module.exports = Technology;
