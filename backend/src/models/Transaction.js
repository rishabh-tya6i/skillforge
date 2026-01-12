const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId, // Optional if it's a subscription or payout
        ref: 'Course'
    },
    amount: { type: Number, required: true },
    type: { type: String, enum: ['purchase', 'payout', 'refund'], required: true },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'completed' },
    gateway: { type: String, default: 'Stripe (Mock)' },
    transactionId: { type: String, required: true }
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
