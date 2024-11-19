import client from './debugconfig.js'

const prueba = async (req, res) => {
    res.json({"hola": "hola"})
}

const createPartido = async (req, res) => {
    try {
        await client.query(
            `INSERT INTO "partido" ("hora", "fecha", "cancha") VALUES ($1, $2, $3)`,
            [req.body.hora, req.body.fecha, req.body.cancha] //???
        );
        res.json({message: "Lo hiciste bien"});
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message });
        await client.end();
    }
};

const deletePartido = async (req, res) => {
    try {
        await client.query(
            `DELETE FROM "partido" WHERE "id_partido" = $1`,
            [req.params.id]
        );
        res.json({ message: "Partido eliminado" });
    }
    catch (e) {
        res.json({ error: 'El partido no pudo ser eliminado correctamente' });
        await client.end();
    }

}


const getPartido = async (req, res) => {
    //const client = new Client(config);
    try {
        const [partido] = await client.query(
            `SELECT * FROM "partido" WHERE "id_partido" = $1`
        );
        res.json(partido);
    }
    catch (e) {
        res.status(500).json({ error: 'No se puede mostrar el partido' });
        await client.end();
    }
}

const getPartidos = async (req, res) => {
    //const client = new Client(config);
    try {
        const partidos = await client.query(
            `SELECT * FROM partido p, cancha c where p.cancha = c.id`
        );
        res.json(partidos.rows);
    }
    catch (e) {
        res.status(500).json({ error: 'No se puede mostrar el partido' });
        await client.end();
    }
}


const getPartidoDate = async (req, res) => {
    //const client = new Client(config);
    try {
        const {rows} = await client.query(
            `SELECT * FROM partido p, cancha c where p.cancha and "fecha" = $1`,
            [req.params.fecha]
        );
        res.json(rows[0]);
    }
    catch (e) {
        res.status(500).json({ error: 'No sepuede mostrar el partido' });
        await client.end();
    }

}


const updatePartido = async (req, res) => {
    const cliente = new Cliente(config);
    try {
        await client.query(
            `UPDATE "partido" SET "hora" = ?, "fecha" = ?, "cancha" = ?`,
            [req.body.hora, req.body.fecha, req.body.cancha]
        );
        res.json({ id: req.params.id });
        
    } catch (e) {
        res.status(500).json({ error: e.message });
        await client.end();
    }

}


const getParticipantes = async (req, res) => {
    const { id_partido } = req.params;
    const client = new Client(config);
    try {
        const result = await client.query(
            `SELECT i.usuario, email FROM inscripciones i JOIN usuarios u ON i.id_usuario = u.id WHERE i.id_partido = $1`,
            [id_partido]
        );
        res.json(result.rows);
    } catch (e) {
        res.status(500).json({ error: 'No se pudieron obtener los participantes' });
    } finally {
        client.end();
    }
};



const partido = {
    prueba,
    updatePartido,
    getPartido,
    deletePartido,
    createPartido,
    getPartidoDate,
    getPartidos
}

export default partido