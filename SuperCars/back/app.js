import express from "express"
import mongoose from "mongoose";
import carsRouter from "./routes/carsRouter.js";
import invoiceRouter from "./routes/invoiceRouter.js";
import tiendaRouter from "./routes/tiendaRouter.js"
import cors from "cors"


const app = express()
const puerto = process.env.PORT || 8090

app.listen(puerto, ()=>{
    console.log("el servidor se esta ejecutando")
})

mongoose.connect("mongodb+srv://SuperCars:SuperCars@supercarscluster.ihqmraz.mongodb.net/SuperCarsDB?retryWrites=true&w=majority", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("se ha conectado a la base de datos");
    }
})

app.use(cors({origin:"http://localhost:5173"}))
app.use(express.json())

app.use("/cars", carsRouter)
app.use("/invoice", invoiceRouter)
app.use("/tienda", tiendaRouter)
