import userModel from "../models/userModel.js";

// CREATE
export async function createUser(req, res){

    // Desestructurar los parámetros
    const user = req.body;
    let documento

    try {
        documento = await userModel.create(user)

    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(201)
    res.json(documento)
}

// READ
export async function readUser(req, res){

    const {id} = req.params
    let document

    try {
        document = await userModel.find({
            "idNumber":id
        })

    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }
    
    res.status(200)
    res.json(document)
}

// UPDATE
export async function updateUser(req, res){

    const {id} = req.params
    const {changes} = req.body

    let document

    try {
        document = await userModel.findOneAndUpdate({
            "idNumber":id
        },{
            changes
        })

    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    document = 
    document.save()

    res.status(200)
    res.json(document, changes)
}

export async function deleteUser(req, res){

    const {id} = req.params

    let document

    try {
        document = await userModel.findOneAndDelete({
            "idNumber":id
        })

} catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(document)
}