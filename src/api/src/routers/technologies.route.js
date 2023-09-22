const express = require("express");
const technologiesController = require("../controllers/technologies.controller");

const router = express.Router();

router
  .route("/")
  .get(technologiesController.getTechnologies)
  .post(technologiesController.createTechnology);

module.exports = router;
