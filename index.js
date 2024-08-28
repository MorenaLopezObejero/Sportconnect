import express from "express";
const app = express();
const PORT = 8000;
import registro from "./usuario.js";
import partido from "./partidos.js"
//usuario
app.post("/sport", registro.register);

//partidos 
app.post("/createPartido", partido.createPartido);
app.delete("/deletePartido", partido.deletePartido);
app.get("/getPartido", partido.getPartido);
app.put("/updatepartido", partido.updatePartido);
app.post("/createCancha", cancha.createCancha);

app.listen(PORT, () => {
    console.log('API funciona at http://localhost:${PORT}')
});