import { Client } from "pg";


const  client = new Client({
    user: "default",
    host: "ep-little-shadow-a4frsyb1.us-east-1.aws.neon.tech",
    database: "verceldb",
    password: "jY9dHtM6OUBi",
    port: 8000,


})


client.connect();