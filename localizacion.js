import {config} from './dbconfig.js'
await client.connect();
import pkg from 'pg';
const {Client} = pkg;
const client = new Client(config)


const getPartidosCercanos = async (req, res) => {
    const { latitud, longitud, radio } = req.query;
    const client = new Client(config);

    try {
        const result = await client.query(
            `SELECT *, ( 6371 * acos( cos( radians($1) ) * cos( radians( latitud ) ) * cos( radians( longitud ) - radians($2) ) + sin( radians($1) ) * sin( radians( latitud ) ) ) ) AS distancia
            FROM partidos
            HAVING distancia < $3
            ORDER BY distancia;`,
            [latitud, longitud, radio]
        );
        res.json(result.rows);
    } catch (e) {
        res.status(500).json({ error: 'No se pudieron obtener los partidos cercanos' });
        await client.end();
    }
}