const Transaction = require('../models/Transaction');

// @desc    Process Mock Payment (Purchase)
// @route   POST /api/payments/purchase
// @access  Private
const recordPurchase = async (req, res) => {
    try {
        const { courseId, amount } = req.body;
        // Mock success
        const transaction = await Transaction.create({
            user: req.user._id,
            course: courseId,
            amount: amount,
            type: 'purchase',
            status: 'completed',
            transactionId: 'TXN_' + Date.now()
        });

        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get My Transactions
// @route   GET /api/payments/my
// @access  Private
const getMyTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ user: req.user._id }).sort('-createdAt');
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { recordPurchase, getMyTransactions };
