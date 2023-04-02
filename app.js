
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./src/routes/users");
const userRoutes = require("./src/routes/auth");


const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get("/health", (req, res) => {
  res.status(200).send('success');
});

app.use("/users", userRoutes);
app.use("/auth", authRoutes)

app.listen(3001, () => {
  console.log("app run on 3001");
});