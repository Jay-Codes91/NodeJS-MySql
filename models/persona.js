import {sequelize} from '../database/conexion.js';
import { Sequelize, DataTypes, Model } from "sequelize";

export class Persona extends Model{}

Persona.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },

    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    pass: {
        type: DataTypes.STRING,
        allowNull: false
    },

    rol: {
        type: DataTypes.STRING,
        allowNull: false
    }

},

{
    sequelize,
    modelName: 'Persona',
    freezeTableName: true,
    timestamps: false
}
);


