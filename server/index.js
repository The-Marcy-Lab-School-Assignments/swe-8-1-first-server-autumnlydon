const express = require("express");
const app = express();

const logRoutes = (req, res, next) => {
  const date = new Date().toLocaleString();
  console.log(`Method: ${req.method} URL: ${req.url} Date: ${date}`);
  next();
};
app.use(logRoutes);

const servePicture = (req, res) => {
  res.send({
    src: "https://static.wikia.nocookie.net/severance-series/images/c/c8/S2KeyArt3.png/revision/latest?cb=20250109230001",
  });
};

const serveJoke = (req, res) => {
  res.send({
    setup: "If Shakespeare wrote a story about Marcy, what would it be called?",
    punchline: "A fellow",
  });
};

const serveRollDie = (req, res) => {
  const { quantity } = req.query;
  const rolls = [];
  for (let i = 0; i < quantity; i++) {
    let diceRoll = Math.floor(Math.random() * 6 + 1);
    rolls.push(diceRoll);
  }

  res.send(rolls);
};

app.get("/api/picture", servePicture);
app.get("/api/joke", serveJoke);
app.get("/api/rollDie", serveRollDie);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!!!`);
});
