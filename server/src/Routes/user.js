import express from "express";
const userRoutes = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../Controllers/user.js";

userRoutes.get("/", getUsers);
userRoutes.post("/", registerUser);
userRoutes.post("/login", authUser);
userRoutes.post("/logout", logoutUser);
userRoutes.get("/profile", getUserProfile);
userRoutes.put("/profile", updateUserProfile);
userRoutes
  .get("/:id", getUserById)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

export default userRoutes;
