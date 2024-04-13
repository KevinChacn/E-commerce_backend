const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/orders.controller');

// Obtener todas las ordenes
router.get('/getOrders', async (req, res) => {
    try {
        const products = await ordersController.getAllOrders();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error al recuperar ordenes:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Obtener una orden por el id
router.get('/getOrdersById/:id', async (req, res) => {
    try {
        const product = await ordersController.getOrderById(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Orden no encontrado' });
            return;
        }
        res.status(200).json(product);
    } catch (error) {
        console.error('Error al recuperar Orden por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Agregar una nueva orden
router.post('/addOne', async (req, res) => {
    try {
        const newOrder = await ordersController.addOrder(req.body);
        res.status(201).json(newOrder);
    } catch (error) {
        console.error('Error al crear una nueva orden:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});


// Actualizar una orden por su ID
router.put('/:id', async (req, res) => {
    try {
        const updatedOrder = await ordersController.updateOrderById(req.params.id, req.body);
        res.status(200).json(updatedOrder);
    } catch (error) {
        console.error('Error al actualizar Orden por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Eliminar un rol existente
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await ordersController.deleteOrderById(id);
        res.status(200).json({ message: 'Orden eliminada exitosamente' });
    } catch (error) {
        console.error('Error al eliminar Orden:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

module.exports = router;