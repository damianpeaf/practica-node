const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

    res.send('che pibe');

});

module.exports = router;