import express from "express";
const app = express();
const port = 8000;

import { conn } from "/debugconfig.js";

import registro from "./usuario.js";
import partido from "./partidos.js"

//usuario
app.post("/sport", registro.register);

//partidos 
app.post("/createPartido", partido.createPartido);
app.post("/deletePartido", partido.deletePartido);
app.post("/getPartido", partido.getPartido);


app.listen()