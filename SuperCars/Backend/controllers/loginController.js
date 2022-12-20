import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const ACCESS_TOKEN =
    '97afd13f06fdc60b21315d00dec096980596bc0bd98398f4d481506a6b0fad291153892115ed3f5f3648ff13fcfec3de10d8a0e1bae189385cc44eb027353db3';

export default async function login(req, res) {
    // Desestructuración de parámetros
    const { user, password } = req.headers;

    if (user == null || password == null) {
        res.sendStatus(401);
        return;
    }

    let userData = await userModel.findOne({
        user,
    });

    if (user == null || password == null) {
        res.sendStatus(401);
        return;
    }

    // Validación de la contraseña {Contraseña, Contraseña_Encriptada}
    try {
        const valido = await bcrypt.compare(password, userData.password);
        if (valido) {
            const token = jwt.sign(user, ACCESS_TOKEN);
            res.status(200).json({ token });
        } else {
            res.sendStatus(401);
        }
    } catch (err) {
        res.sendStatus(401);
        return;
    }
}
