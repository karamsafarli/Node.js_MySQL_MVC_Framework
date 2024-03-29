require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const redirectMiddleware = require('./middleware/redirect');

app.set('view engine', 'ejs');


app.set('views', path.join(__dirname, './app/views'))
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  REDIRECT MIDDLEWARE
app.use(redirectMiddleware);

//  ALL ROUTES
app.use(routes);


app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening!')
})