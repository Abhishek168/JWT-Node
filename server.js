const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const port = 3000;
const { Post, User } = require("./src/models");
require("dotenv").config();

app.use(express.json());

app.post("/login", async (req, res) => {
  const { name } = req.body;
  const userData = await User.findOne({
    where: {
      name,
    },
    raw: true,
  });
  if (userData == null) return res.send("User not found");
  const user = { name: userData };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.send(accessToken);
});

const authenticateToken = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.status(401).send("please provide token");

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
      if (err) {
        return res.status(403).send("fforbidden");
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.log("🚀 ~ authenticateToken ~ error", error);
  }
};

app.get("/posts", authenticateToken, async (req, res) => {
  try {
    let { name } = req.user;
    const postData = await Post.findAll({
      where: {
        username: name,
      },
    });
    res.send(postData);
  } catch (error) {
    console.log("post ~ error", error);
  }
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
