import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({});

export const User = mongoose.model("User", 
    { 
        name: String,
        email: String, 
        
    }
);