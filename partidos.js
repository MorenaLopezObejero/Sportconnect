import {config} from './dbconfig.js'
await client.connect();
import pkg from 'pg';
const {Client} = pkg;
const client = new Client(config);

const createPartido = async (req, res) => {
    const client = new Client(config);
    try {
        const [result] = await conn.query(
            `INSERT INTO partidos (hora, fecha, cancha) VALUES ($1, $2, $3)`,
            [req.body.hora, req.body.fecha, req.body.cancha] //???
        );
        res.json({ id: result.createPartido });
}
catch (e) {
    res.status(500).json({ error: 'Ya hay un partido registrado con estos datos'});
}
};




const deletePartido = async (req, res) => {
    const client = new Client(config);
    try {
        await conn.query(
            `DELETE FROM partido WHERE id = $1`,
            [req.params.id]
        );
        res.json({ message: "Partido eliminado" });
    }
    catch (e) {
        res.json ({error: 'El partido no pudo ser eliminado correctamente'});
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
    }

}




