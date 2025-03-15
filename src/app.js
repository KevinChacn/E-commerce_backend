const express = require('express');
const morgan = require('morgan');
const pkg = require('../package.json');
const userRoutes = require('./routes/users.routes');

const app = express();

app.set('pkg', pkg);
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
});

app.use('/api/users', userRoutes);

module.exports = app;