const mongoose = require("mongoose");

// create Schema
const karmSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    profileImage: String,
    resume: String,
    jobTitle: [String],
    facebook: String,
    instagram: String,
    linkedin: String,
    github: String,
  },
  { timestamps: true }
);

karmSchema.pre("findByIdAndUpdate", function (next) {
  this.update({}, { $set: { updatedAt: new Date() } });
  next();
});

// create model KARM
const KARM = mongoose.model("karm", karmSchema);

module.exports = KARM;
