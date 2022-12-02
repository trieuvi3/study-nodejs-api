import express from "express";
import conFigViewEngine from "./configs/viewEngine";
require('dotenv').config(); 
// require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

conFigViewEngine(app);

app.get('/', (req, res) => {
  res.render("index.ejs");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})