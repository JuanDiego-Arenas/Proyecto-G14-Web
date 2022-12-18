import mongoose from "mongoose";

const tipos_estados = ["Disponible", "Alquilado", "Vendido"];

const carSchema = mongoose.Schema(
  {
    placa: { type: String, require: true, unique: true },
    propietario: { type: String, require: true },
    estado: { type: String, require: true, enum: tipos_estados },
    marca: { type: String, require: true },
    modelo: { type: String, require: true },
    anio_modelo: { type: Number, require: true },
    cant_puertas: { type: Number, require: true },
    kilometraje: { type: Number, require: true },
    valor: { type: Number, require: true },
  },
  { timestamps: true }
);

export default mongoose.model("cars", carSchema);
