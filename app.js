require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/userRoutes');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error)=> {
    if(error){
        throw error;
    }

    console.log(`Server is running on port http://localhost:${PORT}`);
})