import mongoose from "mongoose";
import { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    description: String,
    tasks: Array,
    status: { type: Boolean, default: true },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("Project", projectSchema);