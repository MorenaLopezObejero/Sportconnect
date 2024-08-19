import {config} from './debugconfig.js';
import pkg from 'pg';
const {Client} = pkg;
const client = new Client(config);
await client.connect();

const register = async (req,res) => {
    const {email, foto_perfil, genero, nombre, fecha_nacimiento, zona, contraseña} = req.body;
    try {
        const emailquery = 'SELECT email FROM usuario WHERE email = ?'
        const values =  [email];
        const result = await client.query(emailquery, values);

        if (result.rows [0] = null){
            const query = 'INSERT INTO usuario (email, foto_perfil, genero, nombre, fecha_nacimiento, zona, contraseña) values ($1, $2, $3, $4, $5, $6, $7)'
        }
    }
    catch {

    }
};
