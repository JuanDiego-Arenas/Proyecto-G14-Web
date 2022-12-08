import mongoose from "mongoose";
import tiendaRouter from "./routes/tiendaRouter.js"

const app = express()
const puerto = process.env.PORT || 3000

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

app.use(express.json())
app.use("/tienda", tiendaRouter)