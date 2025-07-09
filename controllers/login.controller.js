import bcrypt, { hash } from "bcrypt";
import {generateToken} from '../security/authorization.js';
import { Persona } from '../models/persona.js';

export const login = async (req, res) => {
  try {
    const { nombre, pass } = req.body;

    const consult = await Persona.findOne({
      where: {
        nombre: nombre
      }
    })

    if (consult === null) {
      res.status(400).json({ msj: "El usuario no existe" });
    }

    const validaClave = await bcrypt.compare(pass, consult.pass);
    const user = {
      nombre: consult.nombre,
      apellido: consult.apellido,
      rol: consult.rol
    };
    
    if (!validaClave) {
      res.status(400).json({ msj: "Datos incorrectos" });
    } else {
      
      const accessToken = generateToken(user);
      
      
      res.header("Authorization", accessToken).json({
        token: accessToken
      })

    }
  } catch (err) {
    res.status(500).json({msj: err.message});
    return;
  }
};