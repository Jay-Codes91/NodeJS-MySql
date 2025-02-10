import {pool} from '../database/conexion.js';

export const getAll = async (req, res) => {
  
  try {
   const result= await pool.query("SELECT * from persona");
   res.json(result[0]);
      
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getOne = async (req, res) => {
  
  try {
    const [rows] = await pool.query("SELECT * FROM persona WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0) {
      return res.status(400).json({
        request: `La persona con el id ${req.params.id} no existe en la base de datos`,
      });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      msj: "Algo malo ha pasado",
    });
  }
};
