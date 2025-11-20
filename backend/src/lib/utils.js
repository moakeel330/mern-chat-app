import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  // userId is the payload
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // jwt is the token
  // Below function sends jwt token as a cookie
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // Millisecond calculation
    httpOnly: true, // prevents XSS attacks cross-site scripting attacks
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};
