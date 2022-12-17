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

export async function updateCar(req, res){
    const {placa} = req.params
    const {cambios} = req.body

    let documento;

    try {
        documento = await userModel.updateOne({
            "placa": placa
        }, cambios, {runValidators:true})
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}

export async function deleteCar(req, res){
    const {placa} = req.params

    let documento

    try {
        documento = await userModel.findOneAndDelete({
            "placa": placa
        })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}