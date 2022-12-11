import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import carsRouter from "./routes/carsRouter.js";
import invoiceRouter from "./routes/invoiceRouter.js";
import tiendaRouter from "./routes/tiendaRouter.js";

import loginRouter from "./routes/loginRouter.js";

const app = express();
const puerto = process.env.PORT || 3000;

app.listen(puerto, () => {
  console.log("el servidor se esta ejecutando");
});

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://SuperCars:SuperCars@supercarscluster.ihqmraz.mongodb.net/SuperCarsDB?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("se ha conectado a la base de datos");
    }
  }
);

app.use(express.json());

app.use("/user", userRouter);
app.use("/cars", carsRouter);
app.use("/invoice", invoiceRouter);
app.use("/tienda", tiendaRouter);

app.use("/login", loginRouter);
