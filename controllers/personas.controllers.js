import bcrypt, { hash } from "bcrypt";
import { Persona } from '../models/persona.js';

export const getAll = async (req, res) => {
  
  try {
   const result= await Persona.findAll();
   res.json(result);
      
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getOne = async (req, res) => {
  const idP = req.params.id;
  try {
    const idPersona = await Persona.findOne({
      where:{
        id: idP
      }
    });
    if (idPersona === null) {
      return res.status(400).json({
        request: `La persona con el id ${idP} no existe en la base de datos`,
      });
    }

    res.json(idPersona);
  } catch (error) {
    return res.status(500).json({
      msj: error.message
    });
  }
};

export const postPersonas = async (req, res) => {
  try {
    const { nombre, apellido, edad, pass } = req.body;
    const passEncript = await bcrypt.hash(pass, 10);
    
    const persona = await Persona.create({
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      pass: passEncript
    });
    
    const msj = "Persona agregada con éxito";
    res.status(201).json({
      msj: msj,
      data: persona
    });
    
  } catch (error) {
    return res.status(500).json({
     error
    });
  }
}
