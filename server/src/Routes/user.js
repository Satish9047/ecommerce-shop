import express from "express";
const router = express.Router();
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

router.get("/", getUsers);
router.post("/", registerUser);
router.post("/login", authUser);
router.post("/logout", logoutUser);
router.get("/profile", getUserProfile);
router.put("/profile", updateUserProfile);
router.get("/:id", getUserById);
router.put(":/id", updateUser);
router.delete(":/id", deleteUser);

export default router;
