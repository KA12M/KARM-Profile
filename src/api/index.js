const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./src/db/mongo.config");

const routes = require("./src/routers");

const app = express();

const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.json());

app.use(cors());

app.use("/api/blogs", routes.blogs);
app.use("/api/upload-image", routes.uploadImage);

app.listen(port, async () => {
  console.log(`app listening on port: ${port}`);
});
