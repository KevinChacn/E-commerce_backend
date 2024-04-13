const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    customerName: { type: String, required: true },
    customerAddress: { type: String, required: true },
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now }
});

module.exports = model('order', orderSchema);
