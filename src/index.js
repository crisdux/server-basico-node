const express = require('express');
const app = express();
const morgan = require('morgan')
const colors = require('colors');

//settings
app.set('port', process.env.PORT || 3000);
app.set('appName',"MI APP CON NODE");

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// routes
app.use(require('./routes/index'));

//404
app.use((req, res) => {
    res.status(404).render('404');
})

//server on
app.listen(app.get('port'), () => {
    console.log(app.get('appName').bgYellow.black);
    console.log(`Server on port ${app.get('port')} :D`.blue.bold);
});