const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        conn.query('SELECT * FROM platillos', (err, rows) => {
            if (err) return res.send(err);

            res.json(rows);
        });
    });
});

router.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query('INSERT INTO platillos SET ?', [req.body], (err, rows) => {
            if (err) return res.send(err);

            res.send('Platillo añadido');
        });
    });
});

router.delete('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query('DELETE FROM platillos WHERE idplatillos = ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err);

            res.send('Platillo eliminado');
        });
    });
});

router.put('/:id', (req, res) => {  // Cambiado de router.post('/:id', ...) a router.put('/:id', ...)
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query('UPDATE platillos SET ? WHERE idplatillos = ?', [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err);

            res.send('Platillo actualizado');  // Cambiado de 'Platillo eliminado' a 'Platillo actualizado'
        });
    });
});

module.exports = router;
