import express from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "../api.json";
import i18n from './configs/i18n.js';


const server = express();
server.use(i18n.init);

// default route
server.get('/', (req, res) => {
    res.status(200).json({ success:  res.__(true) , message: res.__("welcome")})
});

server.get("/test", (req,res) => {
  res.send("<h1>hello there men and women gents and gentlemen<h1>");
})

server.get('/language-test', (req, res) => {
  res.status(200).json({ success: res.__(true) , message: res.__("language")})
});

server.use(express.json());
server.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDoc, { explorer: true })
);



export default server;