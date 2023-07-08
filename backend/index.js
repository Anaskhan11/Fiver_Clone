import Express from "express";
import dotenv from "dotenv";
import Connection from "./config/Connection.js";

const app = Express();

dotenv.config({ path: "config/Config.env" });
Connection();

app.listen(
  process.env.PORT,
  console.log(`Server is Running on PORT ${process.env.PORT}`)
);
