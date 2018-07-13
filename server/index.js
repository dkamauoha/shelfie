const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const controller = require('./controller');

const app = express();
app.use(bodyParser.json());


app.get('/api/inventory', controller.getAll);
// app.get();
app.post('/api/product', controller.create);
app.put('/api/product/:id', controller.update);
app.delete('/api/product/:id', controller.delete);

const port = 4000;
massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
    })
    .catch(err => console.log(err))
app.listen(port, () => console.log(`Server is running on Port ${port}`));