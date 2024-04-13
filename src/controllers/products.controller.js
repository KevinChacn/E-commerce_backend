const product = require('../models/product');

const productController = {};

productController.getProducts = async () => {
    try {
        const products = await product.find();
        return products;
    } catch (error) {
        console.error('Error al recuperar productos:', error);
        throw new Error('Error interno del servidor');
    }
};

productController.getProductById = async (productId) => {
   try {
       return await product.findById(productId);
   } catch (error) {
       console.error('Error al obtener producto por ID:', error);
       throw new Error('Error interno del servidor');
   }
};

productController.addProduct = async (body) => {
   try {
       const { name, category, price } = body;
       const newProduct = new product({ name, category, price });
       return await newProduct.save();
   } catch (error) {
       console.error('Error al agregar producto:', error);
       throw new Error('Error interno del servidor');
   }
};


productController.updateProductById = async (productId, newData) => {
    try {
        return await product.findByIdAndUpdate(productId, newData, { new: true });
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        throw new Error('Error interno del servidor');
    }
};

productController.deleteProductById = async (productId) => {
    try {
        await product.findByIdAndDelete(productId);
        return { message: 'Producto eliminado exitosamente' };
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        throw new Error('Error interno del servidor');
    }
};



module.exports = productController;
