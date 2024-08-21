import {config} from './debugconfig.js';
import pkg from 'pg';
const {Client} = pkg;
const client = new Client(config);
await client.connect();

const register = async (req,res) => {
    const {email, foto_perfil, genero, nombre, fecha_nacimiento, zona, contraseña} = req.body;
    try {
        const emailquery = 'SELECT email FROM usuario WHERE email = ?'
        const emailValues =  [email];
        const result = await client.query(emailquery, emailValues);

        if (result.rows [0] = null){
            const query = 'INSERT INTO usuario (email, foto_perfil, genero, nombre, fecha_nacimiento, zona, contraseña) values ($1, $2, $3, $4, $5, $6, $7)'
        }
        else{
            res.json ({error: 'Ya hay una cuenta registrada con ese email'})
        }
    }
    catch (err) {
        console.error(err);
        await client.end();
        res.json ({error: 'Hubo un error al registrarsel'});
    }
};

const partidonew = async (req,res) => {
    try{
        const resul = await client.query(
            'INSERT INTO invitacion (partido, usuario_crea, usuario_recibe) VALUES ($1, $2, $3)', 
            [partido, usuario_crea, usuario_recibe] = req.body);
        res.json({id: resul.insertID})
    }
    catch (error){
        console.log(err.message);
    }
}

const registro = {
    register,
    partidonew
};

export default registro;