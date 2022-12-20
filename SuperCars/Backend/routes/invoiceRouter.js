import express from "express";
import { createInvoice, deleteInvoice, readInvoice, updateInvoice } from "../controllers/invoiceController.js";

const invoiceRouter = express.Router()

// Crear
// POST
invoiceRouter.post("/", (req, res) =>{
    createInvoice(req, res)
})

// Leer
// GET
invoiceRouter.get("/", (req, res) =>{
    readInvoice(req, res)
})

// ActualIzar
// PUT
invoiceRouter.patch("/:id", (req, res) =>{
    updateInvoice(req, res)
})

// Eliminar
// DELETE
invoiceRouter.delete("/:id", (req, res) =>{
    deleteInvoice(req, res)
})

export default invoiceRouter;