import userModel from "../models/invoiceModel.js";

export async function createInvoice(req, res){
    const invoice = req.body;

    let documento

    try {
        documento = await userModel.create(invoice)
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(201)
    res.json(documento)
    
}

export async function readInvoice(req, res){
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

export async function updateInvoice(req, res){
    const {id} = req.params
    const {cambios} = req.body

    let documento;

    try {
        documento = await userModel.updateOne({
            "id": id
        }, cambios, {runValidators:true})
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}

export async function deleteInvoice(req, res){
    const {id} = req.params

    let documento

    try {
        documento = await userModel.findOneAndDelete({
            "id": id
        })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(documento)
}