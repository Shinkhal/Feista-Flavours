import {Signup} from "../models/signup.js"; // Import the Signup model
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import loginSchema  from "../models/login.js"; // Import the loginSchema for validation
import ErrorHandler from "../error/error.js";

const JWT_SECRET = process.env.JWTKEY;

// Function to handle user login
export const loginUser = async (req, res, next) => {
  try {
    // Validate user input
    const { error } = loginSchema.validate(req.body);
    if (error) {
      throw new ErrorHandler(error.details[0].message, 400);
    }

    // Destructure user credentials from request body
    const { email, password } = req.body;

    // Find user by email
    const user = await Signup.findOne({ email });
    if (!user) {
      throw new ErrorHandler("Incorrect email ", 401);
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new ErrorHandler("Incorrect password", 401);
    }

    // Generate token
    const token = jwt.sign({ _id: user._id },JWT_SECRET, { expiresIn: "7d" });

    // Send success response with token
    res.status(200).json({ success: true, message: "Login successful!",token });
  } catch (error) {
    if (error.name === "ValidationError") {
        const validation = Object.values(error.errors).map(
            (err) => err.message
        );
        return next(new ErrorHandler(validation .join(', '), 400));
    }
    return next(error);
  }
};


