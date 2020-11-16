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

// mejoras a futuro ?
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Variables globales
app.use((req, res, next) => {
    next();
});

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/autenticacion'));
app.use('/links', require('./routes/links'));


// Public
app.use(express.static(path.join(__dirname, 'public')));

// Empezar con el servidor

app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto ', app.get('port'));
})
