import express from "express";
import {createTienda, readTienda, deleteTienda, updateTienda} from "../controllers/tiendasControlers.js"

const tiendaRouter = express.Router()

//Crear
//POST
tiendaRouter.post("/", (req, res)=>{
    createTienda(req, res)
})

//Leer
//GET
tiendaRouter.get("/:_id", (req, res)=>{
    readTienda(req, res)
})

//Actualizar
//PUT
tiendaRouter.put("/:id", (req, res)=>{
    updateTienda(req, res)
})

//Eliminar
//DELETE
tiendaRouter.delete("/:id", (req, res)=>{
    deleteTienda(req, res)
})

export default tiendaRouter;