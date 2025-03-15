const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

router.get('/getUsers', async (req, res) => {
    try {
        const users = await usersController.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        const status = error.message.includes('interno') ? 500 : 400;
        res.status(status).json({ 
            message: error.message,
            error: error.stack 
        });
    }
});

router.get('/getUserById/:id', async (req, res) => {
    try {
        const user = await usersController.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        const status = error.message.includes('no encontrado') ? 404 : 500;
        res.status(status).json({ 
            message: error.message,
            error: error.stack 
        });
    }
});

router.post('/addOne', async (req, res) => {
    try {
        const newUser = await usersController.addUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        const status = error.message.includes('Faltan') || 
                      error.message.includes('Formato') || 
                      error.message.includes('matrícula') ? 400 : 500;
        res.status(status).json({ 
            message: error.message,
            error: error.stack 
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await usersController.updateUserById(req.params.id, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        const status = error.message.includes('no encontrado') ? 404 : 
                     error.message.includes('semestre') ? 400 : 500;
        res.status(status).json({ 
            message: error.message,
            error: error.stack 
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await usersController.deleteUserById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        const status = error.message.includes('no encontrado') ? 404 : 500;
        res.status(status).json({ 
            message: error.message,
            error: error.stack 
        });
    }
});

module.exports = router;