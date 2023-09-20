const express = require("express");
const { upload, remove } = require("../services/cloudinary");

const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
  res.status(201).send({ path: req.file.path, result: req.file });
});

router.post("/mul", upload.array("image"), (req, res) => {
  res
    .status(201)
    .send({ path: req.files.map((el) => el.path), result: req.files });
});

router.delete("/:fileName", (req, res) => {
  remove(req.params.fileName);
  return res.status(200).send("deleted complete.");
});

module.exports = router;
