const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  //   secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "KARM",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

module.exports.upload = multer({ storage });
module.exports.remove = (fileName) => {
  cloudinary.uploader.destroy(fileName, (result) => {
    console.log("delete image from Cloudinary: ", result);
  });
};
module.exports.removeMultiple = (files) => {
  files.forEach((file) => {
    cloudinary.uploader.destroy(file.filename, (result) => {
      console.log("delete image from Cloudinary: ", result);
    });
  });
};
