

const createPartido = async (req, res) => {
    try {
        const [result] = await conn.query(
            `INSERT INTO partidos (nombre) VALUES (?)`,
            [req.body.nombre]
        );
        res.json({ id: result.insertId });

    if (result.rows [0] = null){
        const query = 'INSERT INTO partido (id_partido, hora, fecha, cancha) values ($1, $2, $3, $4)'
    }
    else{
        res.json ({error: 'Ya hay un partido registrado con estos datos'})
    }
}

catch (e) {
    res.status(500).json({ error: e.message });
}
};




const deletePartido = async (req, res) => {

    try {
        await conn.query(
            `DELETE FROM partido WHERE id = ?`,
            [req.params.id]
        );
        res.json({ message: "Partido eliminado" });
    }
    catch (e) {
        res.json ({error: 'El partido no pudo ser eliminado correctamente'});
    }

}




const getPartido = async (_, res) => {
    try {
        const [albumes] = await conn.query(
            `SELECT * FROM partido WHERE id = ?`
        );
        res.json(albumes);
    }
    catch (e) {
        res.status(500).json({ error: 'No se puede mostrar el partido' });
    }

}