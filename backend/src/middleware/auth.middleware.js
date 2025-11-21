import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

/*
Used to check if user is logged in or not
token is stored in cookies and is verified here
if token is valid, user is allowed to access the protected route
if it is decoded then we can find the user in the database
*/

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - no token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("-password"); // -password means we don't want to return password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectedRoute middleware: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
