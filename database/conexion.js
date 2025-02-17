import { db_host, db_port, db_user, db_pass, db } from "../config.js";
import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize(db, db_user, db_pass, {
    host: db_host,
    port: db_port,
    dialect: "mysql"
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  