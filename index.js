import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8000;
import regisyinises from "./usuario.js";
import partido from "./partidos.js";
import cancha from "./cancha.js"; 
//usuario
app.post("/sport", regisyinises.register);
app.post("/login", regisyinises.inicioses);

//partidos 
app.post("/createPartido", partido.createPartido); //listo 
app.delete("/deletePartido/:id", partido.deletePartido); //listo
app.get("/getPartido", partido.getPartido); //listo
app.get("/getPartidos", partido.getPartidos); //listo
app.put("/updatepartido", partido.updatePartido);
app.get("/getPartidoDate", partido.getPartido) //listo
app.post("/createCancha", cancha.createCancha); //listo
app.get("/getCancha", cancha.getCancha); //listo
app.delete("/deleteCancha/:id", cancha.deleteCancha); //listo



app.listen(PORT, () => {
    console.log(`API funciona at http://localhost:${PORT}`)
});

