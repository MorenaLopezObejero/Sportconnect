import postgresql from 'pg';
const { config } = postgresql;

const client = new config({
    user: "default",
    host: "ep-little-shadow-a4frsyb1.us-east-1.aws.neon.tech",
    database: "verceldb",
    password: "jY9dHtM6OUBi",
    port: 5432,
    ssl: true
});

export default client;