const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {
    // res.send('form')
    res.render('links/add')
});

router.post('/add', async (req, res) => {
    res.send('recibido')

    const { title, url, description } = req.body;
    const newLink = {
        titulo: title,
        url,
        descripcion: description,
        idUsuario: 1
    };

    await pool.query('INSERT INTO links set ?', [newLink]);

})

module.exports = router; 