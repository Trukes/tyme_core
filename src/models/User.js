import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
    { 
        name: String,
        email: String,       
        password: String,
        status: { type: Boolean, default: true }
    }
);

export const User = mongoose.model("User", userSchema);