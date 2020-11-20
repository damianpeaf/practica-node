const mysql = require('mysql');

const { promisify } = require('util');

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((error, connection) => {


    // Validacion error
    if (error) {
        if (error.code == 'PROTOCOL_CONNECTION_LOST') console.log('Conexion a la BD cerrada');
        if (error.code == 'ER_CON_COUNT_ERROR') console.log('Demasiadas conexiones abiertas');
        if (error.code == 'ECONNREFUSED') console.log('Conexion rechazada');
    }

    if (connection) connection.release();
    console.log('BD conectada');

})

// Convertir callbacks a promesas
pool.query = promisify(pool.query);

module.exports = pool;