import express from "express";
import { createCar, deleteCar, readCar, updateCar } from "../controllers/carsController.js";

const carsRouter = express.Router()

// Crear
// POST
carsRouter.post("/", (req, res) =>{
    createCar(req, res)
})

// Leer
// GET
carsRouter.get("/", (req, res) =>{
    readCar(req, res)
})

// ActualIzar
// PUT
carsRouter.put("/", (req, res) =>{
    updateCar(req, res)
})

// Eliminar
// DELETE
carsRouter.delete("/", (req, res) =>{
    deleteCar(req, res)
})

export default carsRouter;