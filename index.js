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
app.delete("/deletePartido", partido.deletePartido);
app.get("/getPartido", partido.getPartido);
app.put("/updatepartido", partido.updatePartido);
app.get("/getPartidoDate", partido.getPartido)
app.post("/createCancha", cancha.createCancha);
app.get("/getCancha", cancha.getCancha);
app.delete("/deleteCancha", cancha.deleteCancha);



app.listen(PORT, () => {
    console.log(`API funciona at http://localhost:${PORT}`)
});