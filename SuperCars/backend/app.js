import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import carsRouter from './routes/carsRouter.js';
import invoiceRouter from './routes/invoiceRouter.js';
import tiendaRouter from './routes/tiendaRouter.js';
import loginRouter from './routes/loginRouter.js';

dotenv.config();

const port = process.env.PORT;
const uri = process.env.URI;
const app = express();

app.listen(port, () => {
    console.log('el servidor se esta ejecutando');
});

mongoose.set('strictQuery', false);
mongoose.connect(uri, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('se ha conectado a la base de datos');
    }
});

app.use(
    cors({
        origin: 'http://localhost:5173',
    })
);

app.use(express.json());

app.use('/user', userRouter);
app.use('/cars', carsRouter);

app.use('/invoice', invoiceRouter);
app.use('/tienda', tiendaRouter);

app.use('/login', loginRouter);
app.use('/', (req, res) => res.json('Bienvenido a SuperCars!'));
