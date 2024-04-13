const express = require('express');
const mongoose = require('mongoose');


// Inicializa la aplicación Express
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});