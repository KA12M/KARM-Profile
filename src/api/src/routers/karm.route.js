const express = require("express");
const karmController = require("../controllers/karm.controller");

const router = express.Router();

router.route("/").get(karmController.getData);

router.route("/:id").put(karmController.editData);

module.exports = router;
