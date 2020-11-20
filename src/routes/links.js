const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {
    // res.send('form')
    res.render('links/add')
});

router.post('/add', async (req, res) => {
    // res.send('recibido')

    const { title, url, description } = req.body;
    const newLink = {
        titulo: title,
        url,
        descripcion: description,
        idUsuario: 1
    };

    await pool.query('INSERT INTO links set ?', [newLink]);

    res.redirect('/links');

})


router.get('/', async (req, res) => {
    const links = await pool.query('SELECT * FROM links');
    res.render('links/list', { links })

    console.log({ links })

})

module.exports = router; 