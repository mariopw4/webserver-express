const express = require('express');
const app = express();
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));
const port = process.env.PORT || 3000;

//Express HBS
const hbs = require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'Mario'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});