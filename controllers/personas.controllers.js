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
    const { nombre, apellido, edad, pass, role } = req.body;
    const passEncript = await bcrypt.hash(pass, 10);
    
    const persona = await Persona.create({
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      pass: passEncript,
      role: role
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

export const putPersonas = async (req, res) => {
  try {
    const id = req.params.id;
    const {nombre, apellido, edad, pass, role} = req.body;

    const persona = await Persona.update({
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      pass: pass,
      role: role
    },
    {
      where: {
        id: id
      }
    }
  );
    
    const msj = "Se ha actualizado con éxito";
    res.status(200).json({message: msj});
    
  } catch (error) {
    return res.status(500).json({
     msj: error.message
    });
  }
}

export const deleteOne = async (req, res) => {
  const idP = req.params.id;
  try {
    const idPersona = await Persona.destroy({
      where:{
        id: idP
      }
    });
    if (idPersona === null) {
      return res.status(400).json({
        request: `La persona con el id ${idP} no existe en la base de datos`,
      });
    }

    res.status(200).json({msj: "Se ha eliminado correctamente"});
  } catch (error) {
    return res.status(500).json({
      msj: error.message
    });
  }
};