/*import {client} from './debugclient.js';
import pkg from 'pg';
const {Client} = pkg;   
const client = new Client(client);
await client.connect();
*/
import bcrypt from "bcryptjs"
import client from "./debugconfig.js";
import jwt from "jsonwebtoken";

const register = async (req,res) => {
    const {email, foto_perfil, genero, nombre, fecha_nacimiento, zona, contrasena} = req.body;
    try {
        const emailquery = 'SELECT email FROM usuario WHERE email = $1'
        const result = await client.query(emailquery, [email]);

        const contrahashed = await bcrypt.hash(contrasena, 10);
        if (result.rows == 0){
            const query = 'INSERT INTO usuario (email, foto_perfil, genero, nombre, fecha_nacimiento, zona, contrasena) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *'
            const result = await client.query(query, [email, foto_perfil, genero, nombre, fecha_nacimiento, zona, contrahashed])
            return res.status(201).json({message: 'Usuario registrado correctamente', user: result.rows[0] });
        }
        else{
            res.json ({error: 'Ya hay una cuenta registrada con ese email12'})
        }
    }
    catch (err) {
        console.error(err);
        await client.end();
        res.json ({error: 'Hubo un error al registrarse'});
    }
};

const inicioses = async (req, res) => {
    try{
        const Usuario = await client.query(
            'SELECT email, contrasena FROM usuario WHERE email = $1',
            [req.body.email]
        );

        if (Usuario.rows.length == 1) {
            if (await bcrypt.compare(req.body.contrasena, Usuario.rows[0].contrasena)){
                const token = jwt.sign({ email: Usuario.email }, "el_secreto"/*process.env.SECRET*/,{
                    expiresIn: "1d",
                });
                return res.status(200).json({ message: 'Se logeo correctamente.', token });
            }     
            else
                return res.status(500).json({ success: false, message: 'La contraseña o el mail son incorrecto11'});
        } else {
            return res.status(500).json({ success: false, message: 'La contraseña o el mail son incorrecto2' });
        }

    }   
        catch (e) {
        console.log(e);
        res.status(500).json('La contraseña o el usuario no son correctos3');
    }      

}

const regisyinises = {
    register,
    inicioses
};

export default regisyinises;
