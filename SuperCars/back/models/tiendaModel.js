import mongoose from "mongoose";

const ciudades = ["Bogota", "Medellin","Pereira","Cali","Sincelejo","Barranquilla","Cartagena"]

const tiendaSchema = mongoose.Schema({
    "_id":{type: String, default:"1"},
    "sede":{type: String, require: true, minlength: 3, maxlength: 30},
    "ciudad": {type: String, require: true, enum: ciudades},
    "direccion": {type: String, require: true},
    "disponible":{type: Boolean, require:true},
    "carros":{type:[]}
})

export default mongoose.model("stores",tiendaSchema);