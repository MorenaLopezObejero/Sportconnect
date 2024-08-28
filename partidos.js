import { conn } from './debugconfig.js'
import pkg from 'pg';
const { Client } = pkg;
const client = new Client(conn);
await client.connect();
const createPartido = async (req, res) => {
    try {
        const [result] = await conn.query(
            `INSERT INTO partidos (hora, fecha, cancha) VALUES ($1, $2, $3)`,
            [req.body.hora, req.body.fecha, req.body.cancha] //???
        );
        res.json({ id: result.createPartido });
    }
    catch (e) {
        res.status(500).json({ error: 'Ya hay un partido registrado con estos datos' });
        await client.end();
    }
};




const deletePartido = async (req, res) => {
    try {
        await conn.query(
            `DELETE FROM partido WHERE id = $1`,
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
    const client = new Client(config);
    try {
        const [partido] = await conn.query(
            `SELECT * FROM partido WHERE id = $1`
        );
        res.json(partido);
    }
    catch (e) {
        res.status(500).json({ error: 'No se puede mostrar el partido' });
        await client.end();
    }

}


const updatePartido = async (req, res) => {
    const cliente = new Cliente(config);
    try {
        await conn.query(
            `UPDATE partido SET hora = ?, fecha = ?, cancha = ?`,
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

const createCancha = async (req, res) => {
    try {
        const [result] = await conn.query(
            `INSERT INTO cancha ( num_cancha, nom_cancha, superficie, cantidad, valor) VALUES ($1, $2, $3, $4, $5)`,
            [req.body.num_cancha, req.body.nom_cancha, req.body.superficie, req.body.cantidad, req.body.valor]
        );
        res.json({ id: result.createCancha });
    }
    catch (e) {
        res.status(500).json({ error: 'Ya hay un cancha registrada con estos datos' });
        await client.end();
    }
};

const deleteCancha = async (req, res) => {
    try {
        await conn.query(
            `DELETE FROM cancha WHERE id = $1`,
            [req.params.id]
        );
        res.json({ message: "Cancha eliminado" });
    }
    catch (e) {
        res.json({ error: 'La cancha no pudo ser eliminada correctamente' });
        await client.end();
    }

}


const partido = {
    updatePartido,
    getPartido,
    deletePartido,
    createPartido,
    createCancha,
    deleteCancha,
}

export default partido