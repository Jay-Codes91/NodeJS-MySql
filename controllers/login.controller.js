import {pool} from '../database/conexion.js';
import bcrypt, { hash } from "bcrypt";
import {generateToken} from '../security/authorization.js';

export const login = async (req, res) => {
    try {
      const { nombre, pass } = req.body;
  
      const consult = "SELECT * FROM persona WHERE nombre = ?";
  
      const [rows] = await pool.query(consult, [nombre]);
  
      if (rows.length == 0) {
        res.status(400).json({ msj: "El usuario no existe" });
      }
  
      const validaClave = await bcrypt.compare(pass, rows[0].pass);
      const user = {nombre: rows[0].nombre};
      if (!validaClave) {
        res.status(400).json({ msj: "Datos incorrectos" });
      } else {
        
        const accessToken = generateToken(user);

        res.header("Authorization", accessToken).json({
          msj: 'Usuario Autenticado',
          token: accessToken
        })

      }
    } catch (err) {
      res.status(500).json({msj: err.message});
    }
  };
