import express from "express";
import path from "path";
const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", (req, res) => {
  res.render("main");
});
app.listen(PORT, () => {
  console.log(`🤪  ${PORT} SERVER START ::  CIty GONGJU Descroption SPA`);
});
