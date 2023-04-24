const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const dotenv = require('dotenv');
const cors = require("cors");
app.use(cors());
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(()=> console.log("DB Connection Successful"))
        .catch((err)=> console.log(err));
        app.use(express.json());
        // app.use("/api/", userRoute);
        app.use("/api/users", userRoute);
        

app.listen(8800,()=>{
    console.log("Backend server is running!");
});