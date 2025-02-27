import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger.json';
const endPointsFiles = ['./app.js'];

const doc = {
  info: {
    title: "API de Personas",
    description: "API de prueba de personas",
  },
  host: "localhost:5100",
  schemes: ["http"],

  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description: "Bearer token to access these api endpoints",
      scheme: "bearer",
    },
  },

  security: [
    {
      bearerAuth: [],
    },
  ]
};

swaggerAutogen()(outputFile, endPointsFiles, doc);