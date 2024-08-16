import express from "express";
const app = express();
const port = 5432;

import { conn } from "/debugconfig.js";

const getusuario = async (_,res) => {
    try {
        const [usuario] = await conn.query (
            'SELECT * FROM usuario'
        );
        res.json(usuario);
    }
    catch (e) {
        res.status(500).json({error: e.message});
    }
}; 
