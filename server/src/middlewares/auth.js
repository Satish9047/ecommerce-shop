import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler";
import User from "../models/user";

//Protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token = req.cookie.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.log("error: ", error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

//admin middleware
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authoried as admin");
  }
};

export { protect, admin };
