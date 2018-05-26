const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();




const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    console.log('connected')
    app.set('db', database);
});

// app.get('/api/inventory', controller.getAll);
// app.post('/api/inventory', controller.create);

// This so to get the express statis compentancie crossed off
// app.get('/', (req, res) => {
//     res.send('hello')
// })


const PORT = 4000;

app.listen(PORT, () => console.log(`We're stressin' on Port: ${PORT}`))
