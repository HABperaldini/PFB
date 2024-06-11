'use strict';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();

<<<<<<< HEAD
const { PORT, A, MYSQL_PORTA } = process.env;
=======
const { PORT, A, MYSQL_PORT } = process.env;
>>>>>>> conflicto

app.get('/', (req, res) => {
    res.send('¡Hola desde PFB!');
});

app.get('/login', (req, res) => {
    res.status(201).send('Login!!!');
});

app.use((req, res) => {
    res.status(404).send('Recurso no encontrado');
});

app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
});
