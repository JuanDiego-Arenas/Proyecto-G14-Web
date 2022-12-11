import mongoose from "mongoose";

const carSchema = mongoose.Schema({
    "placa": String,
    "propietario": String,
    "marca":String,
    "modelo":String,
    "anio_modelo":Number,
    "cant_puertas":Number,
    "kilometraje": Number,
    "valor":Number
})

export default mongoose.model("cars", carSchema)