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
import { protect, admin } from "../middlewares/auth.js";

userRoutes.get("/", protect, admin, getUsers);
userRoutes.post("/", registerUser);
userRoutes.post("/login", authUser);
userRoutes.post("/logout", logoutUser);
userRoutes.get("/profile", protect, getUserProfile);
userRoutes.put("/profile", protect, updateUserProfile);
userRoutes
  .get("/:id", protect, admin, getUserById)
  .put("/:id", protect, admin, updateUser)
  .delete("/:id", protect, admin, deleteUser);

export default userRoutes;
