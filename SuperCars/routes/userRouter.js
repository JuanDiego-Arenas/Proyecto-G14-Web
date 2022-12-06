import express from "express";
import { createUser, deleteUser, readUser, updateUser } from "../controllers/userController.js";
import validateToken from "../middleware/validateToken.js";

const userRouter = express.Router()

// Crear
// POST
userRouter.post("/", (req, res) =>{
    createUser(req, res)
})

// Leer
// GET
userRouter.get("/", validateToken, (req, res) =>{
    readUser(req, res)
})

// ActualIzar
// PUT
userRouter.patch("/:user", (req, res) =>{
    updateUser(req, res)
})

// Eliminar
// DELETE
userRouter.delete("/:user", (req, res) =>{
    deleteUser(req, res)
})

export default userRouter;