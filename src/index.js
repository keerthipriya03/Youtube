// require('dotenv').config({path: "./.env"});
import dotenv from "dotenv";

// import mongoose from "mongoose";
// import {DB_NAME} from "../constants.js";
import connectDB from "./db/index.js"; //Approach2


dotenv.config({path: "./.env"});

// Approach 2
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
})
.catch((error)=>{
    console.error("MongoDB Connection fail Error: ",error);
});

//Normal Approach
// function connectDB() {}
// connectDB();

// most precise way to connect to the database  Approach 1
// import express from "express";
// const app = express();
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error", (error) =>{
//             console.error("Error: ",error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     }
//     catch (error) {
//         console.error("Error: ",error);
//         throw error;
//     }
// })();