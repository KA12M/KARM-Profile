const mongoose = require("mongoose");

// create Schema
const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, default: "anonymous" },
    userName: String,
  },
  { timestamps: true }
);

userSchema.pre("findByIdAndUpdate", function (next) {
  this.update({}, { $set: { updatedAt: new Date() } });
  next();
});

// create model User
const User = mongoose.model("user", userSchema);

module.exports = User;
