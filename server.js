import express from "express";
import jwt from "jsonwebtoken";

const secretKey = "neviubvrei";
import { fileURLToPath } from "url";
import {dirname} from "path";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "running",
  });
});

app.post("/testing", (req, res) => {
  const user = {
    name: "sneha",
    id: 1,
    email: "mayank@gmial.com",
  };



  jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
    res.json({
      token,
    });
  });
});

console.log("file name ", fileURLToPath(import.meta.url));

app.listen(5000, () => {
  console.log(`server is running on port 5000`);
});
