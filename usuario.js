/*import {config} from './debugconfig.js';
import pkg from 'pg';
const {Client} = pkg;
const client = new Client(config);
await client.connect();
*/
import config from '../debugconfig.js'
import bcrypt from "bcryptjs"

const register = async (req,res) => {
    const {email, foto_perfil, genero, nombre, fecha_nacimiento, zona, contrasena} = req.body;
    try {
        const emailquery = 'SELECT email FROM usuario WHERE email = ?'
        const result = await config.query(emailquery, [email]);

        const contrahashed = await bcrypt.hash(contrasena, 10);
        console.log(contrahashed);

        if (result.rows [0] = null){
            const query = 'INSERT INTO usuario (email, foto_perfil, genero, nombre, fecha_nacimiento, zona, contrasena) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *'
            const result = await config.query(query, [email, foto_perfil, genero, nombre, fecha_nacimiento, zona, contrahashed])
        }
        else{
            res.json ({error: 'Ya hay una cuenta registrada con ese email'})
        }
    }
    catch (err) {
        console.error(err);
        await config.end();
        res.json ({error: 'Hubo un error al registrarse'});
    }
};

const inicioses = async (req, res) => {

};

const regisyinises = {
    register,
    inicioses
};

export default regisyinises;