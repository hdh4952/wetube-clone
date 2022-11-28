import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();

const home = (req, res) => {
  return res.send("this is home");
};

const login = (req, res) => {
  return res.send("this is login page");
};

app.use(morgan("dev"));
app.get("/", home);
app.get("/login", login);

app.listen(PORT, () =>
  console.log(`✅Server listening on port http://localhost:${PORT}`)
);
