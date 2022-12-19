import mongoose from "mongoose";

const tipos_alquiler = ["Alquilar", "Vender"];

const invoiceSchema = mongoose.Schema(
  {
    // "id":String,
    // "cliente": String,
    // "tienda": String,
    // "carro":String,
    // "vendedor":String,
    // "tipo_factura_venta":Boolean,
    // "tipo_factura_alquiler":Boolean,
    // "fecha_alquiler_inicial": Date,
    // "fecha_alquiler_final":Date,
    // "valor_total":Number
    cliente: { type: String },
    tienda: { type: String },
    carro: { type: String },
    tipo: { type: String, enum: tipos_alquiler },
    valor_total: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model("invoice", invoiceSchema);
