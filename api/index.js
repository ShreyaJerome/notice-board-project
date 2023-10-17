const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

mongoose.connect(
  "mongodb://shreyajerome:nKIgJ8Louug7RWvn@ac-v5a906e-shard-00-00.vm9otgo.mongodb.net:27017,ac-v5a906e-shard-00-01.vm9otgo.mongodb.net:27017,ac-v5a906e-shard-00-02.vm9otgo.mongodb.net:27017/?ssl=true&replicaSet=atlas-ytbc0k-shard-0&authSource=admin&retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  const userDoc = await User.create({
    username,
    password,
  });
  res.json(userDoc);
});
console.log("Hi");
app.listen(4000);
console.log("Hi");
//nKIgJ8Louug7RWvn
