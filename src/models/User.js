import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [4, "password should have at least 5 chars"],
    },
    status: { type: Boolean, default: true },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

// validate username if exists
userSchema.path("email").validate(async (email) => {
  const count = await mongoose.model("User").count({ email });
  if (count > 0) {
    return false;
  }
  return true;
}, "email is already used");

// hash password
userSchema.pre("save", async function (next) {
  try {
    const user = this;
    let pass = user.password;
    let salt = parseInt(process.env.SALT_HASH) || 10;
    let hash = await bcrypt.hash(pass, salt);

    user.password = hash;

    // TODO :: generate avatar

    return next();
  } catch (e) {
    return next(e);
  }
});

/**
 *
 * @param {String} password password sent to verify auth
 */
userSchema.methods.checkPassword = async function (password) {
  if (!password) return false;

  let validator = await bcrypt.compare(password, this.password);
  return validator;
};

/**
 *
 * @returns
 */
userSchema.methods.generateToken = function () {
  return jwt.sign({ user: this }, process.env.JWT_KEY, { expiresIn: "1h" });
};

// export const User = mongoose.model("User", userSchema);

module.exports = mongoose.model("User", userSchema);
