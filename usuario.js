import {config} from './debugconfig.js';
import pkg from 'pg';
const {Client} = pkg;
const client = new Client(config);
await client.connect();
import bcrypt from "brycrptjs"

const register = async (req,res) => {
    const {email, foto_perfil, genero, nombre, fecha_nacimiento, zona, contrasena} = req.body;
    try {
        const emailquery = 'SELECT email FROM usuario WHERE email = ?'
        const emailValues =  [email];
        const result = await client.query(emailquery, emailValues);

        const contrahashed = await bcrypt.hash(contrasena, 10);
        console.loge(contrahashed);

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
        await client.end();
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