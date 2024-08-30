import { conn } from './debugconfig.js'
import pkg from 'pg';
const { Client } = pkg;
const client = new Client(conn);
await client.connect();

const createCancha = async (req, res) => {
    try {
        const [result] = await conn.query(
            `INSERT INTO "cancha" ( "num_cancha", "nom_cancha", "superficie", "cantidad", "valor") VALUES ($1, $2, $3, $4, $5)`,
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
            `DELETE FROM "cancha" WHERE "id" = $1`,
            [req.params.id]
        );
        res.json({ message: "Cancha eliminado" });
    }
    catch (e) {
        res.json({ error: 'La cancha no pudo ser eliminada correctamente' });
        await client.end();
    }

}

const getCancha = async (req, res) => {
    const client = new Client(config);
    try {
        const [cancha] = await conn.query(
            `SELECT * FROM "cancha" WHERE "id" = $1`
        );
        res.json(cancha);
    }
    catch (e) {
        res.status(500).json({ error: 'No se puede mostrar la cancha' });
        await client.end();
    }

}

const updateCancha = async (req, res) => {
    const cliente = new Cliente(config);
    try {
        await conn.query(
            `UPDATE "cancha" SET "num_cancha" = ?, "nom_cancha" = ?, "superficie" = ?, "cantidad" = ?, "valor" = ?,`
            [req.body.num_cancha, req.body.nom_cancha, req.body.superficie, req.body.cantidad, req.body.valor]
        );
        res.json({ id: req.params.id });
    } catch (e) {
        res.status(500).json({ error: e.message });
        await client.end();
    }

}

const cancha = {
    createCancha,
    deleteCancha,
    getCancha,
    updateCancha,
}

export default cancha