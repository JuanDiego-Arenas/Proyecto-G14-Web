import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"

// CREATE
export async function createUser(req, res){

    // Desestructurar los parámetros para recibirlos en el body
    const user = req.body;
    const {password} = user

    // Cifrado de la contraseña (cifrado diferente así la contraseña sea igual)
    // const salt = await bcrypt.genSalt(10);
    const cryptPassword = await bcrypt.hash(password, 10);

    user.password = cryptPassword

    // guardamos los parámetros del body en un documento
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

    // Desestructurar los parámetros, para recibirlos en la URL
    const {user} = req

    let document

    try {
        document = await userModel.find({user})
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

    // Autorizamos el usuario por la URL
    const {user} = req.params
    // Recibimos los cambios en una constante
    const {changes} = req.body

    let document;

    try {
        document = await userModel.updateOne({
            user
            // Verificamos las validaciones de los parámetros
        }, changes, {runValidators:true})
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(document)
}

// DELETE
export async function deleteUser(req, res){

    const {user} = req.params

    let document

    try {
        document = await userModel.findOneAndDelete({
            user
        })

    } catch (error) {
        res.status(400)
        res.json(error.message)
        return;
    }

    res.status(200)
    res.json(document)
}