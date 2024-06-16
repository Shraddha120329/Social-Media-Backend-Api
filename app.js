const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const router = require('./routes/user-routes');
const blogRouter = require("./routes/blog-routes");
const app = express();

app.use(express.json());

app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose
.connect(process.env.URI)
.then(() => app.listen(process.env.PORT))
.then(()=>
    console.log("Connected to database and listening to localhost")
)
.catch((err)=>console.log(err));

