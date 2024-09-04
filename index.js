import express from "express";
const app = express();
app.use(express.json());
const PORT = 8000;
import regisyinises from "./usuario.js";
import partido from "./partidos.js";
import cancha from "./cancha.js"; 
//usuario
app.post("/sport", regisyinises.register);


//partidos 
app.post("/createPartido", partido.createPartido);
app.delete("/deletePartido/id", partido.deletePartido);
app.get("/getPartido", partido.getPartido); //listo
app.put("/updatepartido", partido.updatePartido);
app.get("/getPartidoDate", partido.getPartido) //listo
app.post("/createCancha", cancha.createCancha);
app.get("/getCancha", cancha.getCancha); //listo
app.delete("/deleteCancha/:id", cancha.deleteCancha);



app.listen(PORT, () => {
    console.log(`API funciona at http://localhost:${PORT}`)
});