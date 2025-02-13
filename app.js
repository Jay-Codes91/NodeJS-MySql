import express from 'express';
import cors from "cors";
import personasRoutes from './routes/personas.routes.js';
import loginRoutes from './routes/login.routes.js';
import { puerto } from './config.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/personas', personasRoutes);
app.use('/login', loginRoutes);

try{
    app.listen(puerto, ()=> {console.log("Iniciando en el puerto: " + puerto);});
}
catch(err) {
    console.log(err);
    
}

