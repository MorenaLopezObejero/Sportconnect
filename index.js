import express from "express";
const app = express();
const port = 5432;

import { conn } from "/debugconfig.js";

import registro from "./usuario";

app.post("/sport", registro.register);