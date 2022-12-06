import jwt from "jsonwebtoken";

const ACCESS_TOKEN = "97afd13f06fdc60b21315d00dec096980596bc0bd98398f4d481506a6b0fad291153892115ed3f5f3648ff13fcfec3de10d8a0e1bae189385cc44eb027353db3"

export default function validateToken(req, res, next) {
    const {token} = req.headers;

    const user = jwt.verify(token, ACCESS_TOKEN)

    if (user == null){
        res.sendStatus(401)
        return;
    }

    req.user = user;

    next()
}