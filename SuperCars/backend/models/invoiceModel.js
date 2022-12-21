import mongoose from "mongoose";

const invoiceSchema = mongoose.Schema({
    "id":String,
    "cliente": String,
    "tienda": String,    
    "carro":String,
    "vendedor":String,
    "tipo_factura_venta":Boolean,
    "tipo_factura_alquiler":Boolean,
    "fecha_alquiler_inicial": Date,
    "fecha_alquiler_final":Date,
    "valor_total":Number
})

export default mongoose.model("invoice", invoiceSchema)