const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const pinRoute = require("./routes/pins")
const userRoute = require("./routes/users")

dotenv.config();

app.use(express.json())

mongoose.set("strictQuery", false);


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("monoDB connected fsdgs");
}).catch((err)=>console.log(err));


app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(8800,()=>{
    console.log("Backend server is running!17")
})