const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors'); // Agrega esta línea
const routes = require('./routes');

const app = express();
app.set('port', process.env.PORT || 9000);

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'comida_rapida',
};

// Agrega el middleware de CORS aquí
app.use(cors()); // Permite solicitudes desde cualquier origen

// Otros middlewares
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Candy Shop');
});

app.use('/api', routes);

app.listen(app.get('port'), () => {
    console.log('servidor funcionando en el puerto', app.get('port'));
});
