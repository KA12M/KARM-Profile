const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();
require("./src/db/mongo.config");
require("./src/db/seedData");

const { generateCookieId } = require("./src/utils/generate");

const AppError = require("./src/utils/appError");

const morgan = require("morgan");

const app = express();

const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://karm-profile.up.railway.app", "http://localhost:3020"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  if (!req.cookies.cookieId) {
    const newCookieId = generateCookieId();

    res.cookie("cookieId", newCookieId);
  }

  next();
});

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
