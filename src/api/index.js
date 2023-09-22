const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./src/db/mongo.config");
require("./src/db/seedData");

const AppError = require("./src/utils/appError");

const morgan = require("morgan");

const app = express();

const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("server is listening...");
});

app.use("/api/karm", require("./src/routers/karm.route"));
app.use("/api/blogs", require("./src/routers/blogs.route"));
app.use("/api/technologies", require("./src/routers/technologies.route"));
app.use("/api/upload-image", require("./src/routers/upload-image.route"));

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Server is running...
app.listen(port, async () => {
  console.log(`app listening on port: ${port}`);
});
