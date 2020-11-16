const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

// Inicializaciones 
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))

app.set('ver motor', '.hbs');

// Middleware ? 
app.use(morgan('dev'));

// Variables globales

// Routes
app.use(require('./routes/'));

// Public

// Empezar con el servidor

app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto ', app.get('port'));
})
