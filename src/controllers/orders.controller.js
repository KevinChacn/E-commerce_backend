const Order = require('../models/orders');

const orderController = {};

// Obtener todos los pedidos
orderController.getAllOrders = async () => {
    try {
        const orders = await Order.find();
        return orders;
    } catch (error) {
        console.error('Error al recuperar ordenes:', error);
        throw new Error('Error interno del servidor');
    }
};

// Obtener un pedido por su ID
orderController.getOrderById = async (orderId) => {
    try {
        return await Order.findById(orderId);
    } catch (error) {
        console.error('Error al obtener el pedido por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Agregar un nuevo pedido
orderController.addOrder = async (body) => {
    try {
        const { customerName, customerAddress, productId, quantity, totalPrice } = body;
        const newOrder = new Order({ customerName, customerAddress, productId, quantity, totalPrice });
        return await newOrder.save();
    } catch (error) {
        console.error('Error al agregar un nuevo pedido:', error);
        throw new Error('Error interno del servidor');
    }
};


// Actualizar un pedido por su ID
orderController.updateOrderById = async (productId, body) => {
    try {
        return await Order.findByIdAndUpdate(productId, body, { new: true });
    } catch (error) {
        console.error('Error al actualizar el pedido por ID:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};


// Eliminar un pedido por su ID
orderController.deleteOrderById = async (productId) => {
    try {
        await Order.findByIdAndDelete(productId);
        return { message: 'Orden eliminada exitosamente' };
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        throw new Error('Error interno del servidor');
    }
};


module.exports = orderController;
