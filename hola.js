import { query } from "express";
import { conn } from "../proyecto.js";

const GetInfoUsuario = async (_,res)=> {
    try{
        const [hola] = await conn.query(
            'Select * FROM usuario'
        );
        res.json(hola)
    }    
    catch (e) {
        res.status(500).json({error: e.message});
    }
}