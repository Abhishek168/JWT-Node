const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const port = 4000;
const { Post, User } = require("./src/models");
require("dotenv").config();

app.use(express.json());

let refreshTokens = [];
const user = {
  name: "Abhishek Bhavsar",
  email: "abhi@gmail.com",
};

app.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, token) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken: accessToken });
  });
});

app.delete("/logout", (req, res) => {
  console.log("hello delete");
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  console.log("🚀  ~ app.delete ~ refreshTokens", refreshTokens);
  res.send("Successfully logout").status(204);
});

app.post("/login", async (req, res) => {
  try {
    const { name } = req.body;
    const userData = await User.findOne({
      where: {
        name,
      },
      raw: true,
    });
    if (userData == null) return res.send("User not found");
    const user = { name: userData };

    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    refreshTokens.push(refreshToken);
    res.json({ accessToken: accessToken, refreshToken: refreshToken });
  } catch (error) {
    console.log("🚀 ~ login error => ", error.message);
  }
});

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15s",
  });
};

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
