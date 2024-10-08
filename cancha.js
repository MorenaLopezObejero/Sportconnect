import client from './debugconfig.js'

const createCancha = async (req, res) => {
    try {
        await client.query(
            `INSERT INTO "cancha" ( "num_cancha", "nom_cancha", "superficie", "cantidad", "valor") VALUES ($1, $2, $3, $4, $5)`,
            [req.body.num_cancha, req.body.nom_cancha, req.body.superficie, req.body.cantidad, req.body.valor]
        );
        res.json({message: "Lo hiciste bien"});
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message });
        //await client.end();
    }
};

const deleteCancha = async (req, res) => {
    try {
        await client.query(
            `DELETE FROM "cancha" WHERE "id" = $1`,
            [req.params.id]
        );
        res.json({ message: "Cancha eliminado" });
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message });
        await client.end();
    }

}

const getCanchaById = async (req, res) => {
    try {
        const {rows} = await client.query(
            `SELECT * FROM "cancha" WHERE "id" = $1`,[req.params.id]
        );
        res.json(rows[0]);
    }
    catch (e) {
        res.status(500).json({ error: 'No se puede mostrar la cancha' });
        await client.end();
    }

}

const getCancha = async (req, res) => {
    try {
        const {rows} = await client.query(
            `SELECT * FROM "cancha"`
        );
        res.json(rows);
    }
    catch (e) {
        res.status(500).json({ error: 'No se puede mostrar la cancha' });
        await client.end();
    }

}

const updateCancha = async (req, res) => {
    try {
        await client.query(
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