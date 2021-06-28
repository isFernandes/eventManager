import express from "express";
require('dotenv').config();

import "./database";
import router from "./routes/index.routes";

const app = express();

app.use(express.json())
app.use(router.user)
app.use(router.auth)

app.listen(3333, () => {
    console.log(`Server is running on port 3333`)
});