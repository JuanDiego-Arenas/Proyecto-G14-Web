import userModel from "../models/carsModel.js";

export async function createCar(req, res){
    const car = req.body;

    let documento

    try {
        documento = await userModel.create(car)
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(201)
    res.json(documento)
    
}

export async function readCar(req, res){
    let documento
    try {
        documento = await userModel.find()
        //.findOne({nombre})
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
    //res.sendStatus(200)
}

export function updateCar(req, res){
    res.sendStatus(200)
}

export function deleteCar(req, res){
    res.sendStatus(200)
}