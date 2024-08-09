import express from "express";
import {createUser, updateUser, deleteUser, getUser, getUsers} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("You are logged in!")
})

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
    res.send("You are a registered user")
})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
  res.send("hello admin, you are logged in!")
})


router.post("/", verifyAdmin, createUser);

router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyUser, deleteUser);

router.get("/:id", verifyUser, getUser);

router.get("/", verifyAdmin, getUsers);

export default router