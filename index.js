const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');
const setupSwagger = require('./swagger');
 

const app = express();
 
setupSwagger(app);

app.use(bodyParser.json());

app.use('/items', itemRoutes);
 
app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 4000;




mongoose.connect('mongodb://localhost:27017/mycrud'
   ).then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}).catch(err => console.error('Failed to connect to MongoDB', err));