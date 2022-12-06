import express from "express";
import conFigViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";

require('dotenv').config(); 
// require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

//set up view engine
conFigViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})