const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products.controller');

// Obtener todos los productos
router.get('/getProducts', async (req, res) => {
    try {
        const products = await productsController.getProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error al recuperar productos:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Obtener un producto por su ID
router.get('/:id', async (req, res) => {
    try {
        const product = await productsController.getProductById(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Producto no encontrado' });
            return;
        }
        res.status(200).json(product);
    } catch (error) {
        console.error('Error al recuperar producto por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Agregar un nuevo producto
router.post('/addOne', async (req, res) => {
    try {
        const newProduct = await productsController.addProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error al crear un nuevo producto:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});


// Actualizar un producto por su ID
router.put('/:productId', async (req, res) => {
    try {
        const updatedProduct = await productsController.updateProductById(req.params.productId, req.body);
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Error al actualizar producto por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Eliminar un rol existente
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await productsController.deleteProductById(id);
        res.status(200).json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

module.exports = router;
