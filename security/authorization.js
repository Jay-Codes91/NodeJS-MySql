import jwt from 'jsonwebtoken';
import { jwt_key } from '../config.js';
import { Persona } from '../models/persona.js';

export function generateToken(data){
   return jwt.sign(data, jwt_key, {expiresIn:'10h'})
}

export function verificarToken(req, res, next){
    const header = req.header('Authorization') || "";
    const token = header.split(" ")[1];
    
    if(!token){
       return res.status(401).json({error: 'Token requerido'});
    }

    try{
        const verify = jwt.verify(token, jwt_key);
         req.rol = verify.rol;
        /*if(verify.nombre != "Mario"){
            res.status(403).json({msj: "No tienes permiso para acceder"});
        }*/
       console.log(verify);
       
        next();
    }
    catch(err){
        res.status(403).json({error: err});
    }
}

export async function isAdmin(req, res, next){

    const persona = await Persona.findOne({
        where: {
            rol: req.rol
        }
    });

    if(persona.rol === "Admin"){
        next();
        return;
    }

    return res.status(403).json({msj: "No tienes permitido acceder"});
    
}