import express from "express"
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";

const app = express()

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("El servidor está funcionando correctamente.");
})
mongoose.connect("mongodb+srv://SuperCars:SuperCars@supercarscluster.ihqmraz.mongodb.net/SuperCarsDB?retryWrites=true&w=majority", (err)=>{
    if (err){
        console.log(err);
    }else{
        console.log("La base de datos está conectada...");
    }
})

app.use(express.json())
app.use("/user", userRouter)