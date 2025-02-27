import express from 'express';
import cors from "cors";
import personasRoutes from './routes/personas.routes.js';
import loginRoutes from './routes/login.routes.js';
import { puerto } from './config.js';
import { verificarToken } from './security/authorization.js';
import swaggerUI from 'swagger-ui-express';
import swaggerDocumentation from './swagger.json' assert {type: 'json'};

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));
app.use('/personas', verificarToken, personasRoutes);
app.use('/login', loginRoutes);

try{
    app.listen(puerto, ()=> {console.log("Iniciando en el puerto: " + puerto);});
}
catch(err) {
    console.log(err.message);
    
}

