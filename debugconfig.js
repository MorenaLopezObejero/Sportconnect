import postgresql from 'pg';
import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
    user: "default",
    host: "ep-little-shadow-a4frsyb1.us-east-1.aws.neon.tech",
    database: "verceldb",
    password: "jY9dHtM6OUBi",
    port: 5432,
    ssl: true
});

await client.connect();

export default client;