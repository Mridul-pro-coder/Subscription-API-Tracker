import mongoose from "mongoose";

import { DB_URL,NODE_ENV } from "../config/env.js";

if(!DB_URL){
    throw new Error("Db is not connected !")
};

const connectdb=async()=>{
    try {
        await mongoose.connect(DB_URL);
        console.log(`connected to database in ${NODE_ENV}`);
        
        
    } catch (error) {
        console.error("error connecting to the database ", error);
        process.exit(1);
    }
};

export default connectdb;