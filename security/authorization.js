import jwt from 'jsonwebtoken';
import { jwt_key } from '../config.js';

export function generateToken(nombre){
   return jwt.sign(nombre, jwt_key, {expiresIn:'1h'})
}

export function verificarToken(req, res, next){
    const header = req.header('Authorization') || "";
    const token = header.split(" ")[1];
    
    if(!token){
       return res.status(401).json({error: 'Token requerido'});
    }

    try{
        const verify = jwt.verify(token, jwt_key);
        req.nombre = verify.nombre;
        next();
    }
    catch(err){
        res.status(403).json({error: err});
    }
}