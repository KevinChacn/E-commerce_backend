const express = require('express');
const morgan = require('morgan');
const pkg = require('../package.json');

const productRoutes = require('./routes/products.routes');
const ordersRoutes = require('./routes/orders.routes');

const app = express()

app.set('pkg', pkg);
app.use(express.json())
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        name: app.set('pkg').name,
        author: app.set('pkg').author,
        Description: app.set('pkg').description,
        version: app.set('pkg').version,
    })
})


app.use('/api/products', productRoutes);
app.use('/api/orders', ordersRoutes);

module.exports = app;