import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
    { 
        name: String,
        email: String, 
        
    }
);

export const User = mongoose.model("User", userSchema);