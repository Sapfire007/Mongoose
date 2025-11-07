import express from "express";
import { updateById } from "./models/Movies.js";
import connectDB from "./db/connectDB.js";

const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";

connectDB(DATABASE_URL);


console.log("=================================================");

updateById("690e1d2044d0cb0e37d805a9");

app.listen(port, () => console.log(`Server listening on port ${port}`));